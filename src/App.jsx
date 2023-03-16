import { useState, useRef } from "react";
import { SectionIntro } from "./components/SectionIntro";
import { SectionSkill } from "./components/SectionSkill";
import { SectionConst } from "./components/SectionConst";

import { SectionDetails } from "./components/SectionDetails";
import { SectionStats } from "./components/SectionStats";

import { useDarkMode } from "./components/darkMode";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  // const api_url = "http://localhost:1337/api/characters";
  // async function getapi(url) {
  //   const res = await fetch(url);
  //   const json = await res.json();
  //   console.log(json);
  //   json.data.map((character) => console.log(character.id));
  // }
  // getapi(api_url);

  return (
    <div className="App bg-gray-100 dark:bg-[#111213] mb-0 text-base font-custom2">
      <div className={darkmode ? "dark" : ""}>
        <div className=" px-3 py-1 xl:px-72">
          <nav className=" flex justify-between items-center py-3 ml-3">
            <a className=" text-2xl text-orange-500" href="">
              Amber
            </a>
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
              <button className=" py-2 px-4 rounded-lg  bg-gradient-to-r from-red-500 to-amber-400 shadow-lg text-white  dark:text-black">
                Fandom
              </button>
            </div>
          </nav>
          <SectionIntro />
          <SectionSkill />
          <SectionConst />
          <SectionStats />
          <SectionDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
