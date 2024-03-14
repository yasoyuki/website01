"use client"

import "../../globals.css";
import { useEffect, useState } from "react";


export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode") === "true";
    document.body.classList.toggle("darK-mode", storedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());

    const header = document.querySelector(".header");
    const footer = document.querySelector(".header");

    document.body.classList.toggle("dark-mode", isDarkMode);
    if (header) header.classList.toggle("dark-mode", isDarkMode);
    if (footer) footer.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="header">
      <div className="mx-auto text-3xl flex items-center justify-between px-3 py-5 md:w-10/12">
      <h2>YUKI'S PORTFOLIO</h2>
      <label className="toggle-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      </div>
    </div>
  );
}


