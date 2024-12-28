import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const JatDaMuqabla = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Track if the button is clicked
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  const navigate = useNavigate(); // Initialize navigate hook

  // Function to generate random position
  const getRandomPosition = () => {
    const maxX = window.innerWidth - 200; // Subtract button width
    const maxY = window.innerHeight - 50; // Subtract button height
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    };
  };

  // Set interval to move the button every 0.2 seconds if not clicked
  useEffect(() => {
    if (isButtonClicked) return; // Don't move the button if clicked

    const intervalId = setInterval(() => {
      setButtonPosition(getRandomPosition());
    }, 2000); // 200ms = 0.2 seconds

    // Clear interval on component unmount or when clicked
    return () => clearInterval(intervalId);
  }, [isButtonClicked]);

  // Handle button click
  const handleButtonClick = () => {
    setIsButtonClicked(true); // Stop the button from moving
    setShowModal(true); // Show the modal with the image
  };

  // Close modal and navigate to home page
  const closeModalAndRedirect = () => {
    setShowModal(false);
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Main Content */}
      <main className="w-full text-center">

        {/* The moving button */}
        <button
          className="bg-green-900 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300"
          style={{
            position: "absolute",
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
          }}
          onClick={handleButtonClick}
        >
          Press To See JAT DA MUQABLA
        </button>

        {/* Modal for displaying image as background */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div
              className="relative w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('/images/sidhu2.jpeg')", // Set the image as background
              }}
            >
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-5 flex py-5 justify-center">
                <div className="flex justify-between flex-col text-white px-4">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Aaja Tujhe JAT DA MUQABLA DIKHAU..
                  </h2>
                  <button
                    onClick={closeModalAndRedirect} // Close modal and navigate to home
                    className="mb-4 px-6 py-2 bg-green-900 text-white rounded-lg"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default JatDaMuqabla;
