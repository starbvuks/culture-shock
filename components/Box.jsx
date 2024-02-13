"use client"

import React, { useState, useEffect, useRef } from "react";
import { motion, useTransform, useViewportPointer } from 'framer-motion';

const RollingTextEffect = () => {
  // Define the animation variants
  const textVariants = {
    normal: { y: "-100%" },
    hover: { y: "0%" },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative">
      {/* Original Text */}
      <motion.span
        className="absolute top-0 left-0"
        variants={textVariants}
        initial="normal"
        whileHover="hover"
        transition={{ duration: 0.5 }}
      >
        Original Text
      </motion.span>

      {/* Highlighted Text */}
      <motion.span
        className="absolute bottom-0 left-0"
        variants={textVariants}
        initial="hover"
        whileHover="normal"
        transition={{ duration: 0.5 }}
      >
        Highlighted Text
      </motion.span>

      {/* Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-lg"
        variants={backgroundVariants}
        initial="hidden"
        whileHover="visible"
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

const HoverText = ({ children }) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x:  0, y:  0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const x = useTransform(mousePosition.x, (value) => {
    const rect = ref.current.getBoundingClientRect();
    return Math.max(rect.left, Math.min(value - rect.width /  2, rect.right - rect.width));
  });

  const y = useTransform(mousePosition.y, (value) => {
    const rect = ref.current.getBoundingClientRect();
    return Math.max(rect.top, Math.min(value - rect.height /  2, rect.bottom - rect.height));
  });

  return (
    <motion.div className="relative">
      <motion.span
        ref={ref}
        className="absolute"
        style={{ x, y }}
        initial={{ fontWeight: 'normal' }}
        whileHover={{ fontWeight: 'bold' }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};




const Box = () => {
  return (
    <div className="pb-20">
      <motion.div
        className="w-24 h-24 bg-blue-300 flex m-44"
        animate={{
          x: 500,
          scale: 1.3,
          opacity: 1,
          backgroundColor: "lightblue",
          rotate: 360,
        }}
        initial={{
          opacity: 0.1,
        }}
        drag
        dragConstraints={{ right: 20 }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
      ></motion.div>

      {/* <HoverText>test</HoverText>  */}
    </div>
  );
};

export default Box;
