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
                        <label htmlFor="category" className="block text-lg text-gray-700 font-medium">Event Category</label>
                        <select
                            name="category"
                            id="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Event Type</option>
                            <option value="Technical">Technical</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Sports">Sports</option>
                            <option value="Academic">Academic</option>
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
                        <label htmlFor="location" className="block text-lg text-gray-700 font-medium">Venue</label>
                        <input
                            type="text"
                            name="venue"
                            id="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            required
                            placeholder="Enter event location"
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

                    {/* Organizer Contact */}
                    {/* <div className="form-group">
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
                    </div> */}

                    {/* Ticket Price */}
                    <div className="form-group">
                        <label htmlFor="ticketPrice" className="block text-lg text-gray-700 font-medium">registrationFee</label>
                        <input
                            type="number"
                            name="registrationFee"
                            id="registrationFee"
                            value={formData.registrationFee}
                            onChange={handleChange}
                            placeholder="Enter ticket price"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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
