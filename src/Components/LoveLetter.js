import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css";
import Gallery from "./Gallery";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element
  const navigate = useNavigate();

  // Make sure the audio is ready to be played
  useEffect(() => {
    if (audioRef.current) {
      // Load the audio on component mount
      audioRef.current.load();
    }
  }, []);

  const handleButtonClick = () => {
    // Play audio only if it's not already playing
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to the start
      audioRef.current.play().catch((error) => {
        // Handle any errors, such as autoplay restrictions
        console.error("Error playing audio:", error);
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="love-container">
      {/* Floating Mamohlolo Name */}
      <span className="floating-name" style={{ animationDelay: "0s" }}>
        Mamohlolo
      </span>
      <span className="floating-name" style={{ animationDelay: "2s" }}>
        Mamohlolo
      </span>
      <span className="floating-name" style={{ animationDelay: "4s" }}>
        Mamohlolo
      </span>
      <span className="floating-name" style={{ animationDelay: "6s" }}>
        Mamohlolo
      </span>
      <span className="floating-name" style={{ animationDelay: "8s" }}>
        Mamohlolo
      </span>

      {/* Audio Player */}
      <audio ref={audioRef} loop>
      <source src={require('./pearl-teeh.mp3')} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Envelope Wrapper */}
      <div className="envelope-wrapper">
        {/* Envelope */}
        <motion.div
          className="envelope"
          animate={{ y: isOpen ? -50 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Flap */}
          <motion.div
            className="flap"
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          />
          {/* Envelope Body */}
          <div className="body" />
        </motion.div>

        {/* Love Card */}
        <motion.div
          className="love-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isOpen ? -120 : 50, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            <strong>My Love, My Queen, My Everything,</strong>
            <br /><br />
            From the moment we started this journey together, you have been my greatest blessing. Even though distance separates us right now, my heart has never been closer to yours. Every second apart makes me realize just how much I love and appreciate you.
            <br /><br />
            You are not just my love, but the mother of our beautiful daughter—the most precious gift we've ever received. Watching you be such a loving, caring, and strong mother makes me love you even more. I admire you, I respect you, and I cherish you.
            <br /><br />
            No matter how far we are, I want you to know that you are always in my heart, in my thoughts, and in everything I do. You are my home, my peace, and my forever. One day, the distance will be gone, and I will hold you in my arms again, where you belong.
            <br /><br />
            <strong>Happy Valentine's Day, My Queen. I love you more than words can ever express. 💖</strong>
            <br /><br />
            Forever Yours, <br />
            Katleho
          </p>
          <hr />
          <p>
            <strong>Sesotho Translation:</strong>
            <br /><br />
            <strong>Lerato laka, Mofumahali waka, ntho e ‘ngoe le e ‘ngoe ea ka,</strong>
            <br /><br />
            Ho tloha motsotsong oo re qalileng leeto lena hammoho, u bile tlhohonolofatso e kholo bophelong ba ka. Le ha sebaka se re arohantse hona joale, pelo ea ka ha e so be haufi le ea hao ho feta hona joale. Nako le nako ha ke le hole le uena, ke hlokomela haholo kamoo ke u ratang le ho u ananela kateng.
            <br /><br />
            Ha u felle feela ho ba lerato laka, empa u ‘m’e oa morali oa rona ea ratehang—mpho e kholo ka ho fetisisa eo re kileng ra ba le eona. Ho u bona u e-na le lerato, u le mohono, u le mosali ea matla ho etsa hore lerato laka ho uena le hōle le ho feta. Kea u hlompha, kea u rata, 'me ke u rata ka pelo eohle.
            <br /><br />
            Ho sa tsotelehe sebaka, ke batla hore u tsebe hore pelo ea ka e lula e le ho uena, mehopolong ea ka, le nthong e 'ngoe le e 'ngoe eo ke e etsang. U lehae laka, khutso ea ka, le bophelo baka bohle. Ka letsatsi le leng, re tla be re sa arohane, 'me ke tla u ts'oara ka matsoho a ka hape, moo u lokelang ho ba teng.
            <br /><br />
            <strong>Thaba ka letsatsi la baratani, Mofumahali waka. Ke u rata ho feta mantsoe ohle ao nka a buang. 💕</strong>
            <br /><br />
            Ka lerato le sa feleng, <br />
            Katleho
          </p>
        </motion.div>
      </div>

      {/* Button to Open */}
      <motion.button
        className="open-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleButtonClick}
      >
        {isOpen ? "Close" : "Open"} My Message To You 💌
      </motion.button>

      <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="love-btn"
              onClick={() => navigate("/gallery")}
            >
              Some Of Our Memories🖼
            </motion.button>
      
      
    </div>
    
    
  );
  
};

export default LoveLetter;
