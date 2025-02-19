import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const logo = "/assets/.jpeg";

export default function Footer() {
  const tabs = [
    { tab: "Home", to: "" },
    { tab: "Events", to: "events" },
    { tab: "Gallery", to: "gallery" },
    { tab: "Blogs", to: "blogs" },
    { tab: "About ", to: "about" },
  ];

  const tabElements = tabs.map((tab) => (
    <li key={tab.tab}>
      <Link to={tab.to} className="hover:text-pink-500">
        {tab.tab}
      </Link>
    </li>
  ));

  return (
    <div className="w-full p-6 bg-black text-white z-2">
      {/* Logo Image */}
      <img
        className="logo inline-block w-36 h-auto mb-4"
        src={logo}
        alt="Logo"
      />

      {/* Title: EVENTIFER*/}
      <p className="text-4xl font-bold mb-4">EVENTIFER</p>

      {/* Flex container for equal sections */}
      <div className="flex">
        {/* 1/3 width for the first section */}
        <div className="w-1/3 pr-8">
          <p className="text-gray-400">
            Eventifier is your ultimate college event management platform,
            designed to simplify event discovery, registration, and
            organization. Whether it's tech fests, cultural nights, workshops,
            or sports meets, we bring everything under one roof. Stay updated,
            participate effortlessly, and make your event experience seamless &
            unforgettable.
          </p>
        </div>

        {/* 1/3 width for the second section */}
        <div className="w-1/3 pr-8 flex justify-center">
          <ul className="space-y-2 text-left">{tabElements}</ul>
        </div>

        {/* 1/3 width for the third section (aligning the text to the left like div 2) */}
        <div className="w-1/3 pr-8">
          <p className="text-gray-400 text-2xl">Follow EVENTIFIER</p>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaYoutube size={30} />
            </a>
          </div>

          {/* New Links Below Social Icons */}
          <div className="mt-6">
            <ul className="space-y-4 text-left">
              <li>
                <a href="#contact-us" className="white hover:text-pink-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#privacy-policy"
                  className="text-white hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Gray Line */}
      <br />
      <hr className="border-t-05 border-gray-400 my-6" />

      <div className="w-full text-gray-400">
        {/* Flex container with 3 equal-width divs */}
        <div className="flex justify-center space-x-8">
          {/* Div 1 - Page Last Updated */}
          <div className="w-1/3 text-center">
            <p>Page Last Updated: January 2025</p>
          </div>

          {/* Div 2 - Page Editor */}
          <div className="w-1/3 text-center">
            <p>
              Page Editor: <span className="font-bold">Mankirat Singh</span>
            </p>
          </div>

          {/* Div 3 - Responsible GALAXIFY Official */}
          <div className="w-1/3 text-center">
            <p>
              Responsible Official:{" "}
              <span className="font-bold">Vasundhara Gupta</span>
            </p>
          </div>
        </div>
      </div>

      {/* Div below the line */}
      <br />
      <br />
      <div className="text-center text-gray-400">
        <p>© 2025 EVENTIFIER. All Rights Reserved.</p>
      </div>
      <br />
    </div>
  );
}