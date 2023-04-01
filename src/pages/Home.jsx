import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useDarkMode } from "../components/darkMode";
import FilterPage from "../components/FilterPage";
import Sidebar from "../components/Sidebar";
import { Transition } from "@headlessui/react";
import { SectionIntro } from "../components/SectionIntro";
import { SectionDetails } from "../components/SectionDetails";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [darkmode, setDarkMode] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setOpen(true);
    }
  }, []);

  const handleClickMobile = () => {
    setOpen(false);
  };

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="min-h-screen dark:bg-[#111213] bg-gray-100 pr-3 pl-3 mb-0 text-base font-custom2 ">
        <div className="absolute z-50">
          <Transition
            show={open}
            enter="transition ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Sidebar handleClickMobile={handleClickMobile} />
          </Transition>
        </div>
        <div className="relative z-10 pt-6 pb-6 lg:ml-80 lg:mr-6">
          <nav className=" flex justify-between items-center py-3 ml-3">
            <span className="text-orange-500">
              <Link to="/" className=" text-orange-500 text-2xl">
                Home
              </Link>
            </span>
            <div className="flex items-center gap-2">
              <div>
                {colorTheme === "light" ? (
                  <svg
                    onClick={() => setTheme("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-8 text-orange-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setTheme("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-8 text-indigo-900 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </div>
              <button onClick={handleClick}>
                {open ? (
                  <AiOutlineClose className="h-7 w-8 dark:fill-orange-500 cursor-pointer lg:hidden" />
                ) : (
                  <BiMenuAltRight className="h-7 w-8 dark:fill-orange-500 cursor-pointer lg:hidden" />
                )}
              </button>
            </div>
          </nav>
          <Routes>
            <Route path="/CharacterWeb" element={<FilterPage />} />
            <Route path="/characters" element={<SectionIntro />} />
            <Route path="/characters" element={<SectionIntro />} />
            <Route path="/weapons" element={<SectionDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
