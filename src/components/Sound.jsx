"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const Sound = () => {
    
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      <audio loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        audio element not supported on this browser
      </audio>

      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"sound"}
        name={"sound"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
