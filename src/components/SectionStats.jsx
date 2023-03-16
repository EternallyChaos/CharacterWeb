import { characters } from "../data/characters";
import Slider from "@mui/material/Slider";
import { amber } from "@mui/material/colors";
import { useState } from "react";

const color = amber[900];

function SectionStats() {
  const [value, setValue] = useState(1);

  function sliderValue(value) {
    if (typeof value != "number") {
      value = 1;
    }
    setValue(value);
  }

  const statArray = [
    [],
    [2038, 48, 129, "0%"],
    [3940, 93, 250, "0%"],
    [5016, 118, 318, "6%"],
    [6233, 147, 396, "12%"],
    [7309, 172, 464, "12%"],
    [8385, 198, 532, "18%"],
    [9461, 223, 601, "24%"],
  ];

  const levels = [, 20, 40, 50, 60, 70, 80, 90];

  return (
    <div className=" p-4 my-2 bg-white dark:bg-[#2f3237] bg-clip-border shadow-lg rounded-xl flex flex-col justify-start items-center gap-4">
      <h3 className="text-center text-orange-500 text-xl mt-1 underline underline-offset-4">
        Amber: Stats
      </h3>
      <div className="flex flex-col items-stretch gap-4 md:flex-row ">
        <div className="p-4 flex-1 h-full dark:bg-[#40444cb4] rounded-lg ">
          <div className="flex justify-center items-center mt-2 gap-5 sm:gap-8 ">
            <Slider
              sx={{
                maxWidth: "60%",
                color: color,
                "& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover ":
                  {
                    boxShadow: "0px 0px 0px 8px rgba(255, 255, 255, 0.17)",
                  },
              }}
              defaultValue={1}
              step={1}
              marks
              min={1}
              max={7}
              onChange={(_, value) => sliderValue(value)}
            />
            <p className="border-none text-white bg-orange-500 border px-2 py-1 rounded">
              Level: {levels[value]}
            </p>
          </div>
          <div className="rounded-lg mt-4">
            <table className=" p-2 table-fixed w-full dark:text-white bg-gray-100 dark:bg-[#40444cb4]">
              <thead className=" text-sm uppercase bg-gray-100 dark:bg-[#40444cb4] ">
                {/* <tr className="border dark:bg-[#40444cb4] dark:border-gray-500">
                  <th scope="row" className="px-6 py-3">
                    Stat
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Number
                  </th>
                </tr> */}
              </thead>
              <tbody>
                <tr className="bg-white border dark:bg-[#40444cb4] dark:border-gray-600">
                  <td className="px-2 py-2 text-center">HP</td>
                  <td className="px-2 py-2 text-center">
                    {statArray[value][0]}
                  </td>
                </tr>
                <tr className="bg-white border dark:bg-[#40444cb4] dark:border-gray-600">
                  <td className="px-2 py-2 text-center">ATK</td>
                  <td className="px-2 py-2 text-center">
                    {statArray[value][1]}
                  </td>
                </tr>
                <tr className="bg-white border dark:bg-[#40444cb4] dark:border-gray-600">
                  <td className="px-2 py-2 text-center">DEF</td>
                  <td className="px-2 py-2 text-center">
                    {statArray[value][2]}
                  </td>
                </tr>
                <tr className="bg-white border dark:bg-[#40444cb4] dark:border-gray-600">
                  <td className="px-2 py-2 text-center">ATK(%)</td>
                  <td className="px-2 py-2 text-center">
                    {statArray[value][3]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" h-full flex-1 p-4 bg-gray-100 dark:bg-[#40444cb4] rounded-lg ">
          <h4 className=" text-orange-500 text-xl mb-1 ">Voice Actors</h4>
          <p className="dark:text-white my-1">VA(EN): Kelly Baskin</p>
          <p className="dark:text-white my-1">VA(CHS): 蔡书瑾</p>
          <p className="dark:text-white my-1">VA(JP): 石見舞菜香</p>
          <p className="dark:text-white my-1">VA(KR): Kim Yeon-woo </p>
          <h4 className=" text-orange-500 text-xl mb-1 ">Extra</h4>
          <p className="dark:text-white my-1">Birthday: 8/10</p>
          <p className="dark:text-white my-1">
            Affiliation: Knights of Favonius
          </p>
          <p className="dark:text-white my-1">Constellation: Lepuss</p>
        </div>
      </div>
    </div>
  );
}
export { SectionStats };
