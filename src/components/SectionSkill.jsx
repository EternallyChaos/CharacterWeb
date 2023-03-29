import { Tab } from "@headlessui/react";
import { Fragment } from "react";

import NormalAttackImg from "../assets/NormalAttack.png";
import SkillImg from "../assets/Skill.png";
import BurstImg from "../assets/Burst.png";

function SectionSkill() {
  return (
    <div className="my-4 px-4 py-2 bg-white bg-clip-border shadow-lg rounded-xl dark:bg-[#2f3237]">
      <h3 className="text-center text-orange-500 text-xl m-4 underline underline-offset-4">
        Skills & Talents
      </h3>
      <Tab.Group>
        <Tab.List className="flex space-evenly gap-4 min-w-0">
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
                Normal Attack
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
                Skill
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
                Burst
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="my-5 bg-gray-100 rounded-xl dark:bg-[#40444cb4] dark:text-white">
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4 md:flex-col md:gap-3 md:items-start xl:items-start">
            <div className=" p-3 flex justify-start items-center gap-8">
              <img
                className="p-2 max-h-full w-20 m-auto bg-gray-500 rounded-full"
                src={NormalAttackImg}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg">Normal Attack</p>
                <div className="my-2 flex justify-center items-center gap">
                  <span className="text-white bg-orange-500 rounded p-1.5 mr-1">
                    Type: Bow
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p>
                Performs up to 5 consecutive shots with a bow.
                <br />
                <br />
                Charged Attack:
                <br />
                Perform a more precise Aimed Shot with increased DMG. While
                aiming, flames will accumulate on the arrowhead. A fully charged
                flaming arrow will deal Pyro DMG.
                <br />
                <br />
                Plunging Attack:
                <br />
                Fires off a shower of arrows in mid-air before falling and
                striking the ground, dealing AoE DMG upon impact.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4 md:flex-col md:gap-3 md:items-start xl:items-start">
            <div className=" p-3 flex justify-start items-center gap-8">
              <img
                className="p-2 max-h-full w-20 m-auto bg-gray-500 rounded-full"
                src={SkillImg}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg">Explosive Puppet</p>
                <div className="my-2 flex justify-center items-center gap">
                  <span className="text-white bg-orange-500 rounded p-1.5 mr-1">
                    CD: 20s
                  </span>
                  <span className="text-white bg-orange-500 rounded p-1.5">
                    ER: 60
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p>
                The ever-reliable Baron Bunny takes the stage.
                <br />
                <br />
                Baron Bunny:
                <br />
                Continuously taunts the enemy, drawing their fire. Baron Bunny's
                HP scales with Amber's Max HP. When destroyed or when its timer
                expires, Baron Bunny explodes, dealing AoE Pyro DMG.
                <br />
                <br />
                Hold:
                <br /> Adjusts the throwing direction of Baron Bunny. The longer
                the button is held, the further the throw.
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col justify-center items-center w-full h-auto p-4 gap-4 md:flex-col md:gap-3 md:items-start xl:items-start">
            <div className=" p-3 flex justify-start items-center gap-8">
              <img
                className="p-3 max-h-full w-20 m-auto bg-gray-500 rounded-full"
                src={BurstImg}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg">Fiery Rain</p>
                <div className="my-2 flex justify-center items-center gap">
                  <span className="text-white bg-orange-500 rounded p-1.5 mr-1">
                    CD: 20s
                  </span>
                  <span className="text-white bg-orange-500 rounded p-1.5">
                    ER: 40
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p>
                Fires off a shower of arrows, dealing continuous AoE Pyro DMG.
              </p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export { SectionSkill };
