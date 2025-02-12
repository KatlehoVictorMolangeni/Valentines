import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Gallery from "./Gallery";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy Valentine's Day, Mama Soso! 💕
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        You're miles away, but my heart is always with you. 💖
      </motion.p>

      {/* Button to Navigate to Love Letter Page */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="love-btn"
        onClick={() => navigate("/love-letter")}
      >
        Check Me Out🫦
      </motion.button>

      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              delay: i * 0.5,
            }}
          >
            <FaHeart color="red" />
          </motion.div>
        ))}
      </div>
     
    </div>
  );
};

export default LandingPage;
