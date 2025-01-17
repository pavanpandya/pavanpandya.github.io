"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollButtonVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed right-5 transition-all ${
        isScrollButtonVisible ? "bottom-24" : "bottom-5"
      } ${
        theme === "light"
          ? "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700"
          : "bg-purple-600 hover:bg-purple-700 active:bg-purple-800"
      } w-[3rem] h-[3rem] bg-opacity-90 backdrop-blur-md border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950 z-[9999]`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
