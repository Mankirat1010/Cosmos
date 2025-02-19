import { useState } from "react";

const getevent2 = "/assets/caty.webp";

export default function GetEvent() {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // You can now handle form submission, like sending the data to a backend or API
        console.log("User Details:", userDetails);
        // After submission, maybe show a success message or redirect
        setShowRegisterForm(false);
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            {/* Header with Elegant Purple Background */}
            <header className="w-full py-6 text-center text-4xl font-extrabold shadow-md 
                              bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                Tech & Innovation Conference 2025
            </header>

            {/* Main Content Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between flex-grow p-0">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center items-center p-6">
                    <img
                        src={getevent2}
                        alt="Event Speaker"
                        className="w-[500px] h-[600px] object-cover rounded-lg shadow-xl"
                    />
                </div>

                {/* Event Description Section */}
                <div className="md:w-1/2 text-gray-700 text-2xl px-6 md:px-12">
                    <p className="mb-6">
                        Join us for an exciting day of discussions, hands-on workshops, and networking with technology pioneers. 
                        Explore the latest trends in AI, cybersecurity, blockchain, and more! Get a chance to interact with 
                        industry leaders and innovators who are shaping the future of technology.
                    </p>

                    <p className="mb-6">
                        Whether you are a developer, entrepreneur, or tech enthusiast, this event is tailored to help you 
                        gain insights, build valuable connections, and discover groundbreaking ideas.
                    </p>

                    {/* Elegant Purple "Register Now" Button */}
                    <button 
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
                        onClick={() => setShowRegisterForm(true)}
                    >
                        Register Now
                    </button>
                </div>
            </div>

            {/* Event Details Below the Image */}
            <div className="w-full text-center text-gray-700 text-2xl py-6 bg-gray-100 mb-10">
                <p className="mb-3"><span className="font-semibold">📅 Date:</span> March 15, 2025</p>
                <p className="mb-3"><span className="font-semibold">⏰ Time:</span> 10:00 AM - 5:00 PM</p>
                <p className="mb-3"><span className="font-semibold">📍 Venue:</span> Grand Hall, City Center</p>
            </div>

            {/* Registration Form */}
            {showRegisterForm && (
                <div className="w-full flex justify-center items-center py-6 bg-gray-200">
                    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Register for Tech & Innovation Conference</h2>
                        
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userDetails.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userDetails.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={userDetails.phone}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
                                >
                                    Submit Registration
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer with Extra Spacing */}
            <footer className="w-full text-center text-gray-600 py-6 text-lg bg-gray-200 mt-auto">
                © 2025 Tech & Innovation Conference. All Rights Reserved.
            </footer>
        </div>
    );
}
