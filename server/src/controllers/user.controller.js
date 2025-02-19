import { v4 as uuid } from "uuid";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import { BAD_REQUEST, NOT_FOUND, SERVER_ERROR, OK } from "../constants/errorCodes.js";
import { generateToken } from "../utils/generateToken.js";
import { COOKIE_OPTIONS } from "../constants/cookieOptions.js";

const getUser = async (searchInput) => {
    try {
        const user = await User.findOne({
            $or: [
                { user_id: searchInput },
                { user_name: searchInput },
                { user_email: searchInput },
            ],
        });
        if (!user) {
            return { message: "User not found" };
        }
        return user;
    } catch (error) {
        throw error;
    }
};

const login = async (req, res) => {
    try {
        const { searchInput, password } = req.body;
        console.log(searchInput, password);
        if (!searchInput || !password) {
            return res.status(BAD_REQUEST).json({ message: "missing Fields" });
        }

        const user = await getUser(searchInput);
        if (!user) {
            return res.status(NOT_FOUND).json({
                message: "user with this email or username does not exist ",
            });
        }

        const isValid = await bcrypt.compareSync(password, user.user_password);
        if (!isValid) {
            return res
                .status(BAD_REQUEST)
                .json({ message: "wrong credentials" });
        }
        //token fn generates a promise so frst let it resolve
        const token = await generateToken(user);

        await User.updateOne(
            { user_id: user.user_id },
            {
                $set: {
                    user_token: token,
                },
            }
        );
        const { user_token, user_password, ...loggedinUser } = user.toObject();
        return res
            .status(OK)
            .cookie("token", token, {
                ...COOKIE_OPTIONS,
                maxAge: process.env.TOKEN_MAXAGE,
            })
            .json(loggedinUser); // frst cookie will be sent!!(bcz .json(data) is the final response)
    } catch (err) {
        return res.status(SERVER_ERROR).json({
            error: err.message,
            message: "something went wrong while logging in the user",
        });
    }
};

const register = async (req, res) => {
    try {
        const {
            userName,
            firstName,
            lastName,
            password,
            email,
            role,
            contact,
            institute
        } = req.body;

        const data = {
            userName,
            firstName,
            lastName,
            password,
            email,
            role,
            contact,
            institute
        };

        //empty field checks //pending optimised
        if (
            Object.entries(data).some(
                ([key, value]) => !value && key !== "lastname"
            )
        ) {
            return res.status(BAD_REQUEST).json({ message: "missing fileds"});
        }

        // const existingUser = await getUser(userName);
        // if (existingUser) {
        //     return res
        //         .status(BAD_REQUEST)
        //         .json({ message: "user already exists" });
        // }

        const avatar = process.env.AVATAR_COMMON_URL;

        const user = await User.create({
            user_id: uuid(),
            user_name: userName,
            first_name: firstName,
            last_name: lastName,
            user_password: password,
            user_avatar: avatar,
            user_email: email,
            user_role: role,
            user_contact: contact,
            user_institute: institute,
        });
        await user.save(); // pre hook is applied so we are saving it

        const { user_password, ...createdUser } = user.toObject();

        return res.status(OK).json(createdUser);
    } catch (err) {
        return res.status(SERVER_ERROR).json({
            message: "Something went wrong while registering user",
            error: err.message,
        });
    }
};

const logout = async (req, res) => {
    try {
        await User.updateOne(
            { user_id: req.user?.user_id },
            {
                $set: {
                    user_token: "",
                },
            },
            {
                new: true,
            }
        );

        return res
            .status(OK)
            .clearCookie("token", COOKIE_OPTIONS)
            .json({ message: "user logged out successfully" });
    } catch (err) {
        return res.status(SERVER_ERROR).json({
            error: err.message,
            message: "something went wrong while logging out the user",
        });
    }
};

export {
    getUser,
    login,
    register,
    logout,
    // deleteAccount,
    // getChannelProfile,
};
