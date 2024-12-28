import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FaArrowLeft } from "react-icons/fa";

// Import all images from the assets folder
import tractorImage from "../assets/tractor.jpeg";
import shooterDadiImage from "../assets/shooterdadi.jpeg";
import deolsImage from "../assets/deols.jpg";
import rajuPunjabiImage from "../assets/rajupunjabi.jpeg";
import welcomePageImage from "../assets/welcomePageImage.jpg";
import sidhuImage from "../assets/sidhu.jpeg";
import jatRegimentImage from "../assets/jatregiment.jpg";
import babbuMaanImage from "../assets/babbumaan.jpeg";
import tikaitImage from "../assets/tikait.jpg";
import satyapalImage from "../assets/satyapal.jpg";
import booksImage from "../assets/books.jpg";
import jatlandImage from "../assets/jatland.jpg";
import jaideepBoddyImage from "../assets/jaideepboddy.jpg";
import honeyGippyImage from "../assets/honeygippy.jpeg";
import hoeImage from "../assets/hoe.jpeg";
import tikait2Image from "../assets/tikait2.webp";
import rafiImage from "../assets/rafi.jpeg";
import jatland2Image from "../assets/jatland2.jpg";
import jaideepAhlawatImage from "../assets/jaideepahlawat.jpg";
import babbuMaan3Image from "../assets/babbumaan3.jpeg";
import bhagatSinghImage from "../assets/bhagatsingh.jpeg";
import daraSinghImage from "../assets/darasingh.jpeg";
import dharamTikaitImage from "../assets/dharamtikait.jpg";
import protestImage from "../assets/protest.jpeg";
import babbuMaan2Image from "../assets/babbumaan2.jpeg";
import diljitKiaraImage from "../assets/diljitkiara.jpeg";
import duniImage from "../assets/duni.jpeg";
import farmersImage from "../assets/farmers.jpg";
import jatland3Image from "../assets/jatland3.jpg";
import jatPardeshiImage from "../assets/jatpardeshi.jpeg";
import sidhuDiwaliImage from "../assets/sidhudiwali.jpeg";

const HardImages = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Array of image objects
  const images = [
    { src: tractorImage, alt: "Hard Image 1" },
    { src: shooterDadiImage, alt: "Hard Image 2" },
    { src: deolsImage, alt: "Hard Image 3" },
    { src: rajuPunjabiImage, alt: "Hard Image 4" },
    { src: welcomePageImage, alt: "Hard Image 5" },
    { src: sidhuImage, alt: "Hard Image 6" },
    { src: jatRegimentImage, alt: "Hard Image 7" },
    { src: babbuMaanImage, alt: "Hard Image 8" },
    { src: tikaitImage, alt: "Hard Image 9" },
    { src: satyapalImage, alt: "Hard Image 10" },
    { src: booksImage, alt: "Hard Image 11" },
    { src: jatlandImage, alt: "Hard Image 12" },
    { src: jaideepBoddyImage, alt: "Hard Image 13" },
    { src: honeyGippyImage, alt: "Hard Image 14" },
    { src: hoeImage, alt: "Hard Image 15" },
    { src: tikait2Image, alt: "Hard Image 16" },
    { src: rafiImage, alt: "Hard Image 17" },
    { src: jatland2Image, alt: "Hard Image 18" },
    { src: jaideepAhlawatImage, alt: "Hard Image 19" },
    { src: babbuMaan3Image, alt: "Hard Image 20" },
    { src: bhagatSinghImage, alt: "Hard Image 21" },
    { src: daraSinghImage, alt: "Hard Image 22" },
    { src: dharamTikaitImage, alt: "Hard Image 23" },
    { src: protestImage, alt: "Hard Image 24" },
    { src: babbuMaan2Image, alt: "Hard Image 25" },
    { src: diljitKiaraImage, alt: "Hard Image 26" },
    { src: duniImage, alt: "Hard Image 27" },
    { src: farmersImage, alt: "Hard Image 28" },
    { src: jatland3Image, alt: "Hard Image 29" },
    { src: jatPardeshiImage, alt: "Hard Image 30" },
    { src: sidhuDiwaliImage, alt: "Hard Image 31" },
  ];

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
        <h2 className="text-4xl font-semibold text-center text-white flex-1">
          Hard Images
        </h2>
      </header>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-xl shadow-lg shadow-gray-800 mb-4 transition-all duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardImages;
