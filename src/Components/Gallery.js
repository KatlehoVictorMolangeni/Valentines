import React, { useState, useRef } from "react";
import "./Gallery.css";
import song from './naledi.mp3'; // Ensure this file is in your src/ folder
import pic1 from "./kids.jpg";
import pic2 from "./ann.jpg";
import pic3 from "./anni.jpg";
import pic4 from "./first.jpg";
import pic5 from "./lovee.jpg";
import pic6 from "./now.jpg";
import pic7 from "./under.jpg";
import pic8 from "./five.jpg";
import { FaPlay, FaPause } from "react-icons/fa"; // Import play/pause icons

const images = [
  { src: pic1, caption: "Young neh? But Cute 🥰" },
  { src: pic2, caption: "That unforgettable day of my life ❤️" },
  { src: pic3, caption: "My favourite twinny☺️☺️" },
  { src: pic4, caption: "Celebrating love 💕" },
  { src: pic5, caption: "Random but cute selfie 😍" },
  { src: pic6, caption: "Funny how you even love me when I am like this😆😂" },
  { src: pic7, caption: "At our then favourite spot, the quickies we made there? Unforgettable😂" },
  { src: pic8, caption: "It's been 5 years, let's turn it into 50🌍🥰💍" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Music starts OFF
  const audioRef = useRef(new Audio(song));

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error("Autoplay prevented:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="gallery-container">
      <h2>Our Beautiful Journey Together ❤️</h2>
      <p>Every moment with you is special. Here are some of our best memories.</p>
      <p>TAP ON THE PICTURE FOR BETTER EXPERIENCE, OHH AND PLAY SOME MUSIC❤</p>

      {/* Music Control Button */}
      <button className="music-button" onClick={toggleMusic}>
        {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={`Memory ${index + 1}`} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt="Expanded Memory" />
          <p>{selectedImage.caption}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
