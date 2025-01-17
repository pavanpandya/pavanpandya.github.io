"use client";

import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-gray-800 w-[3rem] h-[3rem] bg-opacity-90 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:bg-gray-700 active:bg-gray-600 transition-all dark:bg-teal-600 dark:hover:bg-teal-700 dark:active:bg-teal-800 z-50"
      >
        <BsArrowUp className="text-white" />
      </button>
    )
  );
}
