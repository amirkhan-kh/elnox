import { useEffect, useState } from "react";
import StarBorder from "./star-border";
import { IoSunnyOutline, IoMoon  } from "react-icons/io5";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const active = saved || (prefersDark ? "dark" : "light");
    setTheme(active);
    document.documentElement.classList.toggle("dark", active === "dark");
  }, []);

  // toggleTheme funksiyasi shu yerda
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    window.dispatchEvent(new Event("storage")); // Background uchun
  };

  return (
    
      <StarBorder as="button" className="custom-class" color="cyan" speed="3s">
        <button
          onClick={toggleTheme}
           className={` text-sm font-medium text-[#547792] hover:text-[#314656] p-1.5`}
        >
          {theme === "dark" ? <IoMoon size={15} className="p-0"/> : <IoSunnyOutline size={15} color="#000" className="p-0"/>}
        </button>
      </StarBorder>
  );
}
