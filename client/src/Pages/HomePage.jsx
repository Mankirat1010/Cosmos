export default function HomePage() {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white mt-3"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >
                <div className=" bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">
                        Welcome to Eventifier
                    </h1>
                    <p className="text-lg mt-4 max-w-2xl">
                        Your one-stop destination for managing and exploring
                        exciting college events, workshops, and fests.
                    </p>
                    <a
                        href="/events"
                        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg font-semibold"
                    >
                        Explore Events
                    </a>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="container mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold  mb-8">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Event 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://conferencealert.com/blog/wp-content/uploads/2024/12/Artificial-Intelligence-Conference-2025-1.jpg"
                            alt="Event 1"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">
                                AI & ML Conference
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Join top researchers and students to discuss the
                                future of Artificial Intelligence.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://tcfblogthecollegefever.wordpress.com/wp-content/uploads/2017/11/1481967031-clg-fest-sec-bnr1.jpg?w=1904"
                            alt="Event 2"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">
                                Cultural Fest 2025
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Experience the magic of music, dance, and drama
                                with inter-college competitions.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://media.assettype.com/english-sentinelassam/import/h-upload/2023/04/19/452457-annual-sports-meet.avif?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
                            alt="Event 3"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">
                                Annual Sports Meet
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Get ready to compete in various sports and
                                showcase your athletic skills.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-4">
                        About Cosmos Events
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Cosmos Events is an innovative platform designed to help
                        students, organizers, and participants manage college
                        events seamlessly. From tech fests to cultural shows, we
                        bring everything under one roof.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2">
                            Easy Event Management
                        </h3>
                        <p className="text-gray-700">
                            Organize and manage events with a seamless
                            user-friendly dashboard.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2">
                            Real-time Updates
                        </h3>
                        <p className="text-gray-700">
                            Get live event updates, schedules, and announcements
                            at your fingertips.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2">
                            Wide Variety of Events
                        </h3>
                        <p className="text-gray-700">
                            From coding competitions to cultural nights, we have
                            it all.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-6">
                        What Students Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-700 italic">
                                "Cosmos Events made it so easy for us to
                                register and participate in tech fests. Best
                                experience ever!"
                            </p>
                            <h4 className="font-bold mt-4">- Ananya Sharma</h4>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-700 italic">
                                "Managing the cultural fest was a breeze with
                                this platform. Loved the experience!"
                            </p>
                            <h4 className="font-bold mt-4">- Rahul Verma</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="container mx-auto py-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
                    Have questions? Want to partner with us? Reach out and let's
                    make your event a success!
                </p>
                <a
                    href="/contact"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
}
