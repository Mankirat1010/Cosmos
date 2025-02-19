export default function getEventPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-5xl font-bold">Discover Exciting Events</h1>
        <p className="text-lg mt-2">
          Find and participate in amazing college events near you.
        </p>
      </header>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
          />
          <select className="w-full md:w-1/4 px-4 py-2 border rounded-lg">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Culture</option>
            <option>Sports</option>
            <option>Workshops</option>
          </select>
          <input
            type="date"
            className="w-full md:w-1/4 px-4 py-2 border rounded-lg"
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      {/* Event Listings */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://www.eventmanagerblog.com/wp-content/uploads/2021/08/Conference-Event.jpg"
              alt="Event 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Tech Conference 2025</h3>
              <p className="text-gray-600">📍 New Delhi | 📅 March 20, 2025</p>
              <p className="text-gray-700 mt-2">
                Join experts and students in the biggest AI & ML discussion of
                the year.
              </p>
              <a href="#" className="mt-4 block text-blue-500 hover:underline">
                View Details →
              </a>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://blog.bizzabo.com/hubfs/College%20Events.jpg"
              alt="Event 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Cultural Fest</h3>
              <p className="text-gray-600">📍 Mumbai | 📅 April 5, 2025</p>
              <p className="text-gray-700 mt-2">
                Experience mesmerizing music, dance, and drama performances.
              </p>
              <a href="#" className="mt-4 block text-blue-500 hover:underline">
                View Details →
              </a>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://www.alphonsacollege.in/wp-content/uploads/2019/07/college-sports-meet.png"
              alt="Event 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Annual Sports Meet</h3>
              <p className="text-gray-600">📍 Bangalore | 📅 May 10, 2025</p>
              <p className="text-gray-700 mt-2">
                Compete in exciting sports and showcase your athletic talent.
              </p>
              <a href="#" className="mt-4 block text-blue-500 hover:underline">
                View Details →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
