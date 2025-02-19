export default function EventsPage() {
  return (
    <div className="bg-gray-100 py-12">
      {/* College Events Page Container */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
             College Events
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest workshops, fests, and seminars
            happening in our college!
          </p>
        </header>

        {/* Featured Events */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Event 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.shiksha.com/mediadata/images/articles/1669025984phpy1NQ5p.jpeg"
                alt="Tech Fest 2025"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Tech Fest 2025</h2>
                <p className="text-gray-700 mb-4">
                  Join the biggest tech fest of the year featuring coding
                  hackathons, robotics competitions, and AI workshops.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Register Now
                </a>
              </div>
            </div>

            {/* Featured Event 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://i0.wp.com/examsdaily.in/wp-content/uploads/2023/06/National-Seminar-2023.jpg?fit=1024%2C535&ssl=1"
                alt="National Seminar on AI"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  National Seminar on AI
                </h2>
                <p className="text-gray-700 mb-4">
                  A panel discussion with top researchers in AI and machine
                  learning. Gain insights from industry experts!
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Recent Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Recent Event 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.alphonsacollege.in/wp-content/uploads/2019/07/college-sports-meet.png"
                alt="Annual Sports Meet"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Annual Sports Meet 2024
                </h4>
                <p className="text-gray-700 mb-4">
                  A thrilling competition among students in various sports
                  including football, basketball, and athletics.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  View Highlights
                </a>
              </div>
            </div>

            {/* Recent Event 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://blog.bizzabo.com/hubfs/College%20Events.jpg"
                alt="Cultural Fest 2024"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Cultural Fest 2024
                </h4>
                <p className="text-gray-700 mb-4">
                  A grand celebration of music, dance, and drama with
                  participation from colleges across the country.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  See More
                </a>
              </div>
            </div>

            {/* Recent Event 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.inspiria.edu.in/blog/wp-content/uploads/2021/09/Internship-Programs-for-Students-2021.jpg"
                alt="Career Fair 2024"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Career Fair 2024</h4>
                <p className="text-gray-700 mb-4">
                  Explore job opportunities, interact with recruiters, and
                  attend career-building workshops.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Find Opportunities
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
