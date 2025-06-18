import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(prevScroll > current || current < 10);
      setPrevScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-neutral-950 bg-opacity-90 backdrop-blur-sm shadow`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-wider">Olaoluwa</h1>
        <ul className="flex space-x-6 text-sm font-medium text-gray-300">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#services" className="hover:text-white transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
