import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook
import { FaArrowLeft } from "react-icons/fa";

const QuizPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample questions and options
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["New York", "London", "Delhi", "Mumbai"],
      correctAnswer: "Delhi",
    },
    {
      question: "Who is the Prime Minister of India?",
      options: ["Narendra Modi", "Rahul Gandhi", "Arvind Kejriwal", "Yogi Adityanath"],
      correctAnswer: "Narendra Modi",
    },
    {
      question: "Which is the largest state in India by area?",
      options: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Bihar"],
      correctAnswer: "Rajasthan",
    },
    {
      question: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Cheetah"],
      correctAnswer: "Tiger",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [score, setScore] = useState(0); // Track the score
  const [isAnswered, setIsAnswered] = useState(false); // Track if a question has been answered
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer for styling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility for wrong answers
  const [wrongAnswerIndex, setWrongAnswerIndex] = useState(null); // Track wrong answer index

  // Handle answer selection
  const handleAnswerSelect = (selectedOption) => {
    if (isAnswered) return; // Prevent further clicks after answering

    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption !== currentQuestion.correctAnswer) {
      setWrongAnswerIndex(currentQuestionIndex); // Mark wrong answer
      setIsModalOpen(true); // Show modal for wrong answer
    } else {
      setScore(score + 1); // Increase score for correct answer
    }
    setSelectedAnswer(selectedOption); // Set selected answer for styling
    setIsAnswered(true); // Lock the answer after it's selected
  };

  // Move to next question
  const goToNextQuestion = () => {
    setIsAnswered(false); // Allow answer selection for the next question
    setSelectedAnswer(null); // Reset selected answer for styling
    setWrongAnswerIndex(null); // Clear wrong answer highlight
    setIsModalOpen(false); // Close modal

    // If last question, show final score
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz completed! Your score is: ${score}/${questions.length}`);
    }
  };

  // Handle back button click to navigate to the home page
  const handleBackClick = () => {
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header with Back Arrow */}
      <header className="flex bg-slate-800 p-4 rounded-3xl items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-white text-xl font-bold mr-4 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> {/* React icon for the arrow */}
        </button>
        <h2 className="text-4xl font-medium text-center text-white flex-1">
          JatVerse Quiz
        </h2>
      </header>

      {/* Modal for incorrect answer */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Your Jat Certificate is cancelled now
            </h2>
            <button
              onClick={goToNextQuestion}
              className="mt-4 px-6 py-2 bg-green-900 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Quiz Content */}
      <div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            {questions[currentQuestionIndex].question}
          </h3>
          <div>
            {questions[currentQuestionIndex].options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className={`w-full py-2 px-4 rounded-lg mb-2 text-lg transition-all duration-300 ${
                  selectedAnswer === option
                    ? option === questions[currentQuestionIndex].correctAnswer
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                    : "bg-gray-800 text-white hover:bg-green-700"
                }`}
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswered} // Disable options after answering
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Display Score */}
        <div className="text-center mt-6">
          <p className="text-lg text-green-500">Score: {score} / {questions.length}</p>
        </div>

        {/* Next Question Button */}
        {isAnswered && (
          <div className="text-center mt-6">
            <button
              onClick={goToNextQuestion}
              className="px-6 py-2 bg-green-900 text-white rounded-lg"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
