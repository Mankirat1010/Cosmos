import { useState } from "react";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import Button from "../General/Button.jsx";
import errorHandling from "../Utils/errorHandling.js";
import { register } from "../Services/authService.jsx";
=======
import Button from "../General/Button"; // Assuming you have a reusable Button component
>>>>>>> abe5b04ba6d1df0a5044998cca50613cea360ef6

export default function CreateEvent() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
        date: "",
        time: "",
        location: "",
        capacity: "",
        image: null,
        registrationLink: "",
        contact: "",
        ticketPrice: "",
        status: "draft",
    });
<<<<<<< HEAD
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
=======
>>>>>>> abe5b04ba6d1df0a5044998cca50613cea360ef6

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit event creation data to backend or API here
    };

<<<<<<< HEAD
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
=======
    return (
        <div className="bg-gray-100 py-12 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-center text-3xl font-semibold text-blue-600 mb-8">Create Event</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Event Title */}
                    <div className="form-group">
                        <label htmlFor="title" className="block text-lg text-gray-700 font-medium">Event Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter event title"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Event Description */}
                    <div className="form-group">
                        <label htmlFor="description" className="block text-lg text-gray-700 font-medium">Event Description</label>
                        <textarea
                            name="description"
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Describe the event"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Event Type */}
                    <div className="form-group">
                        <label htmlFor="type" className="block text-lg text-gray-700 font-medium">Event Type</label>
                        <select
                            name="type"
                            id="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Event Type</option>
                            <option value="Conference">Conference</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Seminar">Seminar</option>
                            <option value="Party">Party</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>

                    {/* Event Date */}
                    <div className="form-group">
                        <label htmlFor="date" className="block text-lg text-gray-700 font-medium">Event Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Event Time */}
                    <div className="form-group">
                        <label htmlFor="time" className="block text-lg text-gray-700 font-medium">Event Time</label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <div className="form-group">
                        <label htmlFor="location" className="block text-lg text-gray-700 font-medium">Event Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="Enter event location"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Capacity */}
                    <div className="form-group">
                        <label htmlFor="capacity" className="block text-lg text-gray-700 font-medium">Capacity</label>
                        <input
                            type="number"
                            name="capacity"
                            id="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            required
                            placeholder="Enter max capacity"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Event Image */}
                    <div className="form-group">
                        <label htmlFor="image" className="block text-lg text-gray-700 font-medium">Event Image</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleImageChange}
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Registration Link */}
                    <div className="form-group">
                        <label htmlFor="registrationLink" className="block text-lg text-gray-700 font-medium">Registration Link</label>
                        <input
                            type="url"
                            name="registrationLink"
                            id="registrationLink"
                            value={formData.registrationLink}
                            onChange={handleChange}
                            placeholder="Enter registration link (optional)"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Organizer Contact */}
                    <div className="form-group">
                        <label htmlFor="contact" className="block text-lg text-gray-700 font-medium">Organizer Contact</label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            placeholder="Enter contact info"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Ticket Price */}
                    <div className="form-group">
                        <label htmlFor="ticketPrice" className="block text-lg text-gray-700 font-medium">Ticket Price (optional)</label>
                        <input
                            type="number"
                            name="ticketPrice"
                            id="ticketPrice"
                            value={formData.ticketPrice}
                            onChange={handleChange}
                            placeholder="Enter ticket price"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Event Status */}
                    <div className="form-group">
                        <label htmlFor="status" className="block text-lg text-gray-700 font-medium">Event Status</label>
                        <select
                            name="status"
                            id="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group text-center">
                        <Button btnText="Create Event" className="w-full bg-blue-600 text-white p-4 rounded-md mt-6 hover:bg-blue-700" />
                    </div>
                </form>
>>>>>>> abe5b04ba6d1df0a5044998cca50613cea360ef6
            </div>
        </div>
    );
}