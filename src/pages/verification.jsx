import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTractor } from "react-icons/fa"; // Import the tractor icon from react-icons

const VerificationPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isVerified, setIsVerified] = useState(true);  // State to track verification status
  const [isLoading, setIsLoading] = useState(false);  // State to track loading status
  const navigate = useNavigate();  // hook to navigate between pages

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleVerification = () => {
    setIsLoading(true); // Start loading

    // Show loading animation for 0.5 seconds
    setTimeout(() => {
      if (inputValue === "2") {
        // If answer is correct, set verification as successful and navigate
        setIsVerified(true);  // Set the verification to successful
        navigate("/welcome");  // Redirect to welcome page after delay
      } else {
        setIsVerified(false);  // Set the verification to failed
      }
      setIsLoading(false); // Stop loading after the delay
    }, 1500); // 0.5-second delay for the loading animation
  };

  return (
    <div className="flex items-start justify-start min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <div className="mb-4 text-center">
          <label className="block text-lg mb-2">Jat Verification Needed:</label>
          <p className="text-xl">
            16 * <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="border-b-2 w-20 text-center"
            /> = 8
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleVerification}
            className="px-4 py-2 bg-gray-300 border border-gray-500 text-lg rounded"
          >
            Verify
          </button>
        </div>

        {/* Conditionally render "Non-Jat spotted" if the answer is incorrect */}
        {!isVerified && !isLoading && (
          <h1 className="text-center text-2xl text-red-600 mt-4">Non-Jat spotted</h1>
        )}

        {/* Loading animation with moving tractor icon */}
        {isLoading && (
          <div className="text-center mt-4 relative">
            <FaTractor
              className="tractor-animation text-black w-12 h-12 mx-auto"
              style={{ position: "absolute" }}
            />
            <p className="mt-2 text-xl text-gray-500">Verifying...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationPage;
