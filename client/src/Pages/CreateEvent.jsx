import { useState } from "react";
import Button from "../General/Button"; // Assuming you have a reusable Button component

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

    return (
        <div className="create-event-page bg-gray-100 min-h-screen flex items-center justify-center py-8">
            <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-center text-5xl font-semibold text-blue-600 mb-8">CREATE YOUR EVENT</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group text-center col-span-2">
                        <Button btnText="Create Event" className="w-full bg-blue-600 text-white p-3 rounded-md mt-4 hover:bg-blue-700" />
                    </div>
                </form>
            </div>
        </div>
    );
}
