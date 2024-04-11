"use client";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {};
type theme = "light" | "dark" | "";

const Nav = (props: Props) => {
  const [theme, setTheme] = useState<theme>("");
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") as theme);
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    if (theme) document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="hover:bg-primary hover:text-bng duration-300 py-2 px-4 cursor-pointer"
      >
        {theme === "light" ? (
          <MdDarkMode className="text-3xl " />
        ) : (
          <MdLightMode className="text-3xl " />
        )}
      </button>
    </div>
  );
};

export default Nav;
