import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../General/Button.jsx";
import { login } from "../Services/authService.jsx";

export default function Login() {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        searchInput: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDisabled(true);
        setError("");
        try {
            const response = await login(inputs);
            if (response && !response.message) {
                // setUser(response);
                console.log("sucess")
                navigate("/");
            } else {
                // setUser(null);
                setError(response.message);
            }
        } catch (err) {
            console.log(err);
            navigate("/server-error");
        } finally {
            setLoading(false);
            setDisabled(false);
        }
    };

    const handleMouseOver = (e) => {
        if (!inputs.searchInput || !inputs.password) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    const inputFields = [
        {
            type: "text",
            name: "searchInput",
            id: "searchInput",
            placeholder: "Enter Username or Email",
            label: "Username or Email",
            required: true,
        },
        {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Enter password",
            label: "Password",
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
                required={field.required}
                className="outline-none border-1 border-gray-700 p-2 rounded-md"
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
        </div>
    ));

    return (
        <div>
            <form
                method="POST"
                onSubmit={handleSubmit}
                className="bg-blue-100 p-5 rounded-lg shadow-lg"
            >
                {inputElements}
                {user ? (
                    ""
                ) : (
                    <div className="text-center">
                        <Button
                            disabled={disabled}
                            onMouseOver={handleMouseOver}
                            btnText={loading ? "Loading..." : "Login"}
                        />
                    </div>
                )}
                <div className="text-center mt-3 text-sm">
                    Don't have an account ?{" "}
                    <Link to={"/register"} className="text-blue-900">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
}
