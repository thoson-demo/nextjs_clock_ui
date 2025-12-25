"use client";

import { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from system preference or localStorage
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode); //Todo: move to global state later
  }, []);

  useEffect(() => {
    // Update DOM when isDark changes
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-row items-center w-full p-5">
      <div className="text-4xl font-bold text-on-primary">It&apos;s Time!</div>
      <div className="flex flex-1"></div>
      <IconButton
        icon={
          isDark ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )
        }
        onPress={handleThemeToggle}
      />
    </div>
  );
}
