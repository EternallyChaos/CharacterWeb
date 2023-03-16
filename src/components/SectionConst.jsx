import { Tab } from "@headlessui/react";
import Bow from "../assets/Bow.png";
import { Fragment } from "react";

import Const1 from "../assets/C1.png";
import Const2 from "../assets/C2.png";
import Const3 from "../assets/C3.png";
import Const4 from "../assets/C4.png";
import Const5 from "../assets/C5.png";
import Const6 from "../assets/C6.png";

function SectionConst() {
  return (
    <div className="my-4 px-4 py-2 bg-white bg-clip-border shadow-lg rounded-xl dark:bg-[#2f3237]">
      <h3 className="text-center text-orange-500 text-xl my-4 underline underline-offset-4">
        Constellation
      </h3>
      <Tab.Group>
        <Tab.List className=" flex space-evenly gap-3 min-w-0">
          <Tab
            className="px-1 py-3 rounded grow text-white bg-orange-500 outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected ? " text-white bg-orange-700 shadow-lg" : ""
                }
              >
                C1
              </button>
            )}
          </Tab>
          <Tab
            className="px-1 py-3 rounded grow text-white bg-orange-500 outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected ? " text-white bg-orange-700 shadow-lg" : ""
                }
              >
                C2
              </button>
            )}
          </Tab>
          <Tab
            className="px-1 py-3 rounded grow text-white bg-orange-500 outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected ? " text-white bg-orange-700 shadow-lg" : ""
                }
              >
                C3
              </button>
            )}
          </Tab>
          <Tab
            className="px-1 py-3 rounded grow text-white bg-orange-500 outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected ? " text-white bg-orange-700 shadow-lg" : ""
                }
              >
                C4
              </button>
            )}
          </Tab>
          <Tab
            className="px-1 py-3 rounded grow text-white bg-orange-500 outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected ? " text-white bg-orange-700 shadow-lg" : ""
                }
              >
                C5
              </button>
            )}
          </Tab>
          <Tab
            className="px-1 py-3 rounded grow text-white bg-orange-500 outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected ? " text-white bg-orange-700 shadow-lg" : ""
                }
              >
                C6
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="my-5 bg-gray-100 rounded-xl dark:bg-[#40444cb4] dark:text-white">
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4 ">
            <div className=" flex flex-col justify-around items-center">
              <img
                className="p-1 max-h-full w-20 m-auto bg-gray-500 rounded-full my-2"
                src={Const1}
                alt=""
              />
              <div>
                <p className="text-lg mt-2">One Arrow to Rule Them All </p>
              </div>
            </div>
            <div>
              <p>
                Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the
                first arrow's DMG.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4">
            <div className=" flex flex-col justify-around items-center">
              <img
                className="p-1 max-h-full w-20 m-auto bg-gray-500 rounded-full my-2"
                src={Const2}
                alt=""
              />
              <div>
                <p className="text-lg mt-2">Bunny Triggered</p>
              </div>
            </div>
            <div>
              <p>
                Baron Bunny, new and improved! Hitting Baron Bunny's foot with a
                fully-charged Aimed Shot manually detonates it.
                <br />
                <br />
                Explosion via manual detonation deals 200% additional DMG.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4">
            <div className=" flex flex-col justify-around items-center">
              <img
                className="p-1 max-h-full w-20 m-auto bg-gray-500 rounded-full my-2"
                src={Const3}
                alt=""
              />
              <div>
                <p className="text-lg mt-2">It Burns!</p>
              </div>
            </div>
            <div>
              <p>
                Increases the Level of Fiery Rain by 3. Maximum upgrade level is
                15.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4">
            <div className=" flex flex-col justify-around items-center">
              <img
                className="p-1 max-h-full w-20 m-auto bg-gray-500 rounded-full my-2"
                src={Const4}
                alt=""
              />
              <div>
                <p className="text-lg mt-2">It's Not Just Any Doll...</p>
              </div>
            </div>
            <div>
              <p>
                Decreases Explosive Puppet's CD by 20%. Adds 1 additional
                charge.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4">
            <div className=" flex flex-col justify-around items-center">
              <img
                className="p-1 max-h-full w-20 m-auto bg-gray-500 rounded-full my-2"
                src={Const5}
                alt=""
              />
              <div>
                <p className="text-lg mt-2">It's Baron Bunny!</p>
              </div>
            </div>
            <div>
              <p>
                Increases the Level of Explosive Puppet by 3. Maximum upgrade
                level is 15.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4">
            <div className=" flex flex-col justify-around items-center">
              <img
                className="p-1 max-h-full w-20 m-auto bg-gray-500 rounded-full my-2"
                src={Const6}
                alt=""
              />
              <div>
                <p className="text-lg mt-2">Wildfire</p>
              </div>
            </div>
            <div>
              <p>
                Fiery Rain increases all party members' Movement SPD by 15% and
                ATK by 15% for 10s.
              </p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export { SectionConst };
