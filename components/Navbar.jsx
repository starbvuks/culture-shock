"use client";

import React, { useState, CSSProperties } from "react";
import Link from "next/link";
import { Search, UserRound, ShoppingCart } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

const HoverText = ({ children }) => {
  // Define the animation variants for the text
  const textVariants = {
    normal: { fontWeight: "normal", scale: 1 },
    hover: {
      fontWeight: "bold",
      scale: 1.2,
      transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden flex items-center justify-center rounded-lg"
      whileHover="hover"
      variants={textVariants}
    >
      {/* Inner element for the text content */}
      <span className="tracking-tight">{children}</span>
      {/* Background pseudo-element */}
    </motion.div>
  );
};

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="font-monstserrat shadow-[#DFD2B2] shadow-lg w-full mb-24 px-10 bg-main-bg border-b-2 border-gray-200 flex justify-between items-center align-middle">
      <img src="/cs-logo.png" className="py-1 w-16" alt="logo" />
      <div className="w-[75%] flex gap-12">
        <div className="flex w-[50%] gap-10 justify-center items-center">
          <HoverText>
            <Link href="/" className="tracking-tight">
              <span>about us</span>
            </Link>
          </HoverText>
          <Link href="/" className="tracking-tight">
            <span>products</span>
          </Link>
          <Link href="/" className="tracking-tight">
            <span>cities</span>
          </Link>
          <Link href="/" className="tracking-tight">
            <span>communities</span>
          </Link>
        </div>
        <div className="flex justify-end w-[50%]">
          {!isLoading ? (
            <form
              className="w-[80%] group text-black relative flex items-center justify-end"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="w-full bg-main-search-bg px-4 py-2 text-sm font-medium placeholder-black rounded-full hover:bg-[#DFD2B2] focus:outline-2 focus:outline-[#86795A]"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute h-full px-4 text-black group-focus:opacity-0 opacity-100"
              >
                <Search strokeWidth={2} className="" />
              </button>
            </form>
          ) : (
            <form
              className="w-[80%] group text-black relative flex items-center justify-end"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex justify-center bg-main-search-bg px-4 py-3 text-sm font-medium placeholder-black rounded-full hover:bg-[#DFD2B2] focus:outline-2 focus:outline-[#86795A]">
                <ClipLoader color="#000000" sizeUnit="px" size={17} />
              </div>
            </form>
          )}
        </div>
        <div className="gap-8 flex items-center justify-end">
          <Link href="/" className="tracking-tight">
            <UserRound strokeWidth={2} size={30}/>
          </Link>
          <Link href="/" className="tracking-tight">
            <ShoppingCart strokeWidth={2} size={30}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
