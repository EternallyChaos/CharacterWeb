import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import TaktIcon from "/images/Takt_Icon.png";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Sidebar({ handleClickMobile }) {
  function handleSize() {
    if (window.innerWidth < 1024) {
      handleClickMobile();
    }
  }

  return (
    <>
      <div className="fixed border-r-2 dark:border-gray-700 bg-gray-100  dark:bg-[#111213] text-gray-100 sm:w-72 w-[73%] h-screen pt-4 flex flex-col justify-between ">
        <div className="flex flex-col space-y-3 text-black dark:text-white">
          <div className="flex items-center ml-4 mt-2 md:-mt-0.5 lg:mt-0">
            <img className="h-16 w-16 sm:w-20 sm:h-20" src={TaktIcon} alt="" />
            <a
              href="#"
              className="text-white flex items-center space-x-2 px-4"
              title=""
            >
              <span className="text-orange-500 ml-2 mr-2 mb-2 text-xl whitespace-nowrap truncate">
                Takt Op. DB
              </span>
            </a>
          </div>
          <nav className="ml-2 mr-2 text-lg">
            <Link
              to="/"
              onClick={handleSize}
              className=" flex items-center space-x-2 py-3 px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/characters"
              onClick={handleSize}
              className=" flex items-center space-x-2 py-3 px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white"
            >
              Characters
            </Link>
            <Link
              to="/weapons"
              onClick={handleSize}
              className=" flex items-center space-x-2 py-3 px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white"
            >
              Weapons
            </Link>
            <a
              onClick={handleSize}
              className="flex items-center space-x-2 py-3  px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white group"
            >
              Guides
            </a>
            <a
              onClick={handleSize}
              className="flex items-center space-x-2 py-3 px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white group"
            >
              Map
            </a>
          </nav>
        </div>
        <nav className="ml-2 mr-2  text-lg text-black dark:text-white">
          <a
            onClick={handleSize}
            className="flex items-center py-3 px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white group"
          >
            About
          </a>
          <a
            onClick={handleSize}
            className="flex items-center space-x-2 py-3 px-4 transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white group"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
