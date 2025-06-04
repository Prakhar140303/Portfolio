// import React from "react";
import {motion } from "framer-motion"
const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();                              // stop the native nav
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });     // smooth‑scroll to it
      }
    };
  return (
    <div className="navbar bg-[#0E0701]/95 mb-1 text-white fixed top-0 left-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ">Prakhar<span className="inline text-[#E8AD71]">Singh</span></a>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <motion.li  initial={{ scale: 1 }} whileHover={{ scale: 1.2}}>
            <a href="#portfolio" onClick={(e) =>handleScroll(e, 'portfolio')} className="hover:underline">About Me</a></motion.li>

          <motion.li  initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
            <a href="#education" onClick={(e) =>handleScroll(e, 'education')} className="hover:underline">Education</a></motion.li>

          <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
            <a href="#skills" onClick={(e) =>handleScroll(e, 'skills')} className="hover:underline">Skills</a></motion.li>

          <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
            <a href="#platforms" onClick={(e) =>handleScroll(e, 'platforms')} className="hover:underline">Platform</a></motion.li>

          <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
            <a href="#projects" onClick={(e) =>handleScroll(e, 'projects')} className="hover:underline">Projects</a></motion.li>

          <motion.li  initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
            <a href="#contact" onClick={(e) =>handleScroll(e, 'contact')} className="hover:underline">Contact</a></motion.li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden ">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0E0701] rounded-box w-[px]"
        >
          <li><a href="#portfolio" onClick={(e) =>handleScroll(e, 'portfolio')} className="hover:underline">About me</a></li>
          <li><a href="#education" onClick={(e) =>handleScroll(e, 'education')} className="hover:underline">About</a></li>
          <li><a href="#skills" onClick={(e) =>handleScroll(e, 'skills')} className="hover:underline">Skills</a></li>
          <li><a href="#projects" onClick={(e) =>handleScroll(e, 'projects')} className="hover:underline">Projects</a></li>
          <li><a href="#contact" onClick={(e) =>handleScroll(e, 'contact')} className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
