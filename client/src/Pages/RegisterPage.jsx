import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../General/Button.jsx";
import errorHandling from "../Utils/errorHandling.js";
import { register } from "../Services/authService.jsx";

export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [errors, setErrors] = useState({
        root: "",
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
    });
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
        role: "participant", // default role is participant
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleMouseOver = (e) => {
        if (
            Object.entries(inputs).some(
                ([key, value]) => !value & (key !== "lastName")
            ) ||
            Object.entries(errors).some(([key, value]) => value !== "")
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        errorHandling(name, value, setErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDisabled(true);
        setErrors(null);
        try {

            const response = await register(inputs);
            if (response && !response.message) {
                console.log("sucess")    
                navigate("/");
            } else {
                setUser(null);
                setErrors(response.message);
            }

        } catch (err) {
            console.log(err);
            navigate("/server-error");
        } finally {
            setLoading(false);
            setDisabled(false);
        }
    };

    const inputFields = [
        {
            type: "text",
            name: "userName",
            id: "userName",
            placeholder: "Enter username",
            label: "Username",
            required: true,
        },
        {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "example@gmail.com",
            label: "Email",
            required: true,
        },
        {
            type: "contact",
            name: "contact",
            id: "contact",
            placeholder: "+91 XXXXXXXXXX",
            label: "Contact",
            required: true,
        },
        {
            type: "password",
            name: "password",
            id: "password", // Corrected here
            placeholder: "Enter password",
            label: "Password",
            required: true,
        },
        {
            type: "password",
            name: "confirmPassword",
            id: "confirmPassword",
            placeholder: "Re-enter password",
            label: "Confirm Password",
            required: true,
        },
        {
            type: "text",
            name: "institute",
            id: "institute",
            placeholder: "Enter institute",
            label: "Institute",
            required: true,
        },
    ];

    const inputElements = inputFields.map((field) => (
        <div className="my-4" key={field.name}>
            <div className="relative">
                <label
                    htmlFor={field.name}
                    className="absolute -top-2 left-2 text-sm bg-blue-100 px-1"
                >
                    {field.required && <span className="text-red-600">*</span>}
                    {field.label}
                </label>
            </div>
            <input
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                required={field.required}
                className="outline-none border-1 border-gray-700 p-2 rounded-md w-full"
            />
            {errors[field.name] && (
                <div className="text-red-600 text-sm">{errors[field.name]}</div>
            )}
        </div>
    ));

    return (
        <div className="relative">
            <div className="h-full flex items-center justify-center">
                <div>
                    <h2 className="font-semibold text-2xl text-white text-center">
                        Register
                    </h2>
                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                        className="bg-blue-100 p-5 rounded-lg shadow-lg"
                    >
                        <div className="flex gap-2">
                            <div className="my-4">
                                <div className="relative">
                                    <label
                                        htmlFor="firstName"
                                        className="absolute -top-2 left-2 text-sm bg-blue-100 px-1"
                                    >
                                        <span className="text-red-600">*</span>
                                        First Name
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className="outline-none border-1 border-gray-700 p-2 rounded-md"
                                />
                                {errors.firstName && (
                                    <div className="text-red-600 text-sm">
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>
                            <div className="my-4">
                                <div className="relative">
                                    <label
                                        htmlFor="lastName"
                                        className="absolute -top-2 left-2 text-sm bg-blue-100 px-1"
                                    >
                                        <span className="text-red-600">*</span>
                                        Last Name
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className="outline-none border-1 border-gray-700 p-2 rounded-md"
                                />
                            </div>
                            {errors.lastName && (
                                <div className="text-red-600 text-sm">
                                    {errors.lastName}
                                </div>
                            )}
                        </div>
                        {inputElements}

                        {/* Radio Buttons for role selection */}
                        <div className="my-4">
                            <div className="relative">
                                <label className="text-sm text-blue-900">
                                    <span className="text-red-600">*</span>
                                    Register as:
                                </label>
                            </div>
                            <div className="flex gap-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="participant"
                                        checked={inputs.role === "participant"}
                                        onChange={handleChange}
                                    />
                                    Participant
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="organizer"
                                        checked={inputs.role === "organizer"}
                                        onChange={handleChange}
                                    />
                                    Organizer
                                </label>
                            </div>
                        </div>

            
                        <div className="text-center">
                            <Button
                                disabled={disabled}
                                onMouseOver={handleMouseOver}
                                btnText={loading ? "Loading..." : "Register"}
                            />
                        </div>
                        <div className="mt-3 text-sm text-center">
                            Already have an account ?{" "}
                            <Link to={"/login"} className="text-blue-900">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}