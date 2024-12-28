import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTractor } from "react-icons/fa"; // Import the tractor icon from react-icons
import sidhuImage from "../assets/sidhu.jpeg"; // Import the image from assets

const WelcomePage = () => {
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLesGoClick = () => {
    setIsLoading(true); // Start loading animation

    // After 1.5 seconds, stop loading and navigate to home
    setTimeout(() => {
      setIsLoading(false); // Stop loading after the animation
      navigate("/home"); // Redirect to home page after animation
    }, 1500); // Tractor animation duration
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${sidhuImage})`, // Use the imported image
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 text-white">
          <h1 className="text-5xl font-bold text-green-500">
            Welcome to JatVerse
          </h1>
          <p className="text-lg text-gray-300">
            You've made it through the Jat verification test!💪
          </p>
          <button
            className="bg-green-900 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
            onClick={handleLesGoClick}
          >
            Les Go
          </button>
          {isLoading && (
            <div className="text-center mt-4 relative">
              <FaTractor
                className="tractor-animation text-white w-12 h-12 mx-auto"
                style={{ position: "absolute" }}
              />
              <p className="mt-2 text-xl text-gray-500">Heading to Home...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
