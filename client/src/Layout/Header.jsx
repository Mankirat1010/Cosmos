import { Link } from "react-router-dom";
export default function Header() {

    const tabs = [
        { tab: "Home", to: "" },
        { tab: "About", to: "about" },
        { tab: "Gallery", to: "gallery" },
        { tab: "Events", to: "events" },
        { tab: "Blogs", to: "blogs" },
        { tab: "Upcoming Projects", to: "upcoming-projects" },
        { tab: "Contact", to: "contact" },
        { tab: "Social Media", to: "social-media" },
    ];

    const tabElements = tabs.map((tab) => (
        <li key={tab.tab}>
            <Link
                to={tab.to}
                className="text-white  text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none transition-all duration-300 hover:shadow-lg hover:bg-gray-800 "
            >
                {tab.tab}
            </Link>
        </li>
    ));
    return (
        <header className="fixed top-0 w-full h-[12vh] bg-black flex items-center justify-between border-b-1 border-gray-500 z-1">
                <nav className="flex">{tabElements}</nav>

                <div className=" flex">
                    <Link to={"login"} className="text-white bg-gray-700 px-3 py-1.5 rounded-none hover:bg-gray-500 transition-all   hover:scale-105 hover:shadow-lg text-lg font-semibold">
                        Log In
                    </Link>
                    <Link to={"register"} className="text-white bg-pink-700 px-3 py-1.5 rounded-none hover:bg-pink-500 transition-all   hover:scale-105 hover:shadow-lg text-lg font-semibold">
                        Sign Up
                    </Link>
                </div>
        </header>
    );
}
