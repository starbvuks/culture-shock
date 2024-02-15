/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import VerticalScrollbar from "../components/VerticalScrollbar";

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
    <main className="bg-main-bg h-screen justify-center font-monstserrat">
      <Navbar />
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-full">
          <img src="/landing-main.png" />
        </div>
        <div className="bg-main-orange text-[#904194] shadow-2xl flex flex-col text-center py-12 px-36 w-[80%] rounded-2xl mt-12">
          <div>
            <span className="font-bold text-6xl">about us :)</span>
          </div>
          <span className="font-normal text-xl mt-8">
            look around you, there is <span className="font-bold">SO</span> much
            to explore
          </span>
          <span className="font-normal text-xl mt-14">
            A way to make <span className="font-bold">new beginnings</span> more
            of an experience. We are here to help you see India, and your new
            city from a new, <span className="font-bold">cultural</span> light.
            Starting a new job or studying at a new place can be a whole
            experience, <span className="font-bold">especially</span> in a new
            city. We should celebrate new beginnings while also{" "}
            <span className="font-bold">experience life </span> that the
            surrounding brings us! Let’s start off by welcoming the new ones
            with a <span className="font-bold">taste of the city.</span>
          </span>
        </div>
        <div className="my-12">
          <div className="bg-[#9B469F] py-12 px-36 w-[80%]">
            <div className="bg-white opacity-50 shadow-2xl p-4">
              <span>Dehli</span>
            </div>
          </div>
        </div>
        {/* <TiltCard /> */}
        <VerticalScrollbar />
      </div>
    </main>
  );
}
