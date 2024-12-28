import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HomePage = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close Sidebar when clicked outside
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Navigate to a specific page
  const handleCardClick = (route) => {
    navigate(route); // Navigate to the specific route
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-green-500">JatVerse</h1>
        <button
          onClick={toggleSidebar}
          className="text-xl font-bold focus:outline-none"
        >
          &#9776; {/* Hamburger icon for sidebar */}
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar} // Close sidebar when clicked outside
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white bg-opacity-50 backdrop-blur-md transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 text-black">
            <h2 className="text-2xl font-semibold mb-4">JatVerse Menu</h2>
            <ul className="space-y-4">
              <li>
                <a href="#hard-images" className="text-lg">Hard Images</a>
              </li>
              <li>
                <a href="#quiz" className="text-lg">Quiz</a>
              </li>
              {/* Add more links as necessary */}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content (Home Page) */}
      <main className="p-6">
        <h2 className="text-4xl font-semibold text-center text-green-500 mb-8">Explore JatVerse</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: Hard Images */}
          <div
            id="hard-images"
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick("/Hardimages")} // Navigate to Hard Images page
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Hard Images</h3>
            <p className="text-lg text-gray-600">Browse some tough and bold Jat images that define strength and pride.</p>
          </div>

          {/* Card 2: Quiz */}
          <div
            id="quiz"
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick("/quiz")} // Navigate to Quiz page
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Jat Quiz</h3>
            <p className="text-lg text-gray-600">Test your knowledge with our fun and challenging Jat-themed quiz.</p>
          </div>

          {/* Add more cards as necessary */}
          <div
            id="jatDaMuqabla"
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick("/jatDaMuqabla")} // Navigate to Jat Da Muqabla page
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Jat Da Muqabla</h3>
            <p className="text-lg text-gray-600">Test your knowledge with our fun and challenging Jat-themed quiz.</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default HomePage;
