/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Box from "../components/Box";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="w-[35%] ml-24"
    >
      <img
        style={{
          transform: "translateZ(75px)",
        }}
        className="h-full w-full object-cover rounded-lg"
        alt="random"
        src="/random1.jpg"
      />
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="bg-main-bg h-screen">
      <Navbar />
      <div>
        <TiltCard />
        <Box />
      </div>
    </main>
  );
}
