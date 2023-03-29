import React from "react";
import { Database } from "../data/filterData";

function FilterBox({ setItem, categoryList, filterItem, searchFilter }) {
  return (
    <>
      <div className=" p-4 my-1 bg-white dark:bg-[#2f3237] border-b-gray-500 rounded-xl flex flex-col justify-start items-center gap-4">
        <div>
          {categoryList.map((Val, id) => {
            return (
              <button
                className="inline-flex m-1 px-3.5 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-700 active:bg-orange-700"
                key={id}
                onClick={() => filterItem(Val)}
              >
                {Val}
              </button>
            );
          })}
          <button
            className=" inline-flex m-1 px-3.5 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-700"
            onClick={() => setItem(Database)}
          >
            All
          </button>
        </div>
        <div>
          <input
            className="p-2 bg-gray-300 block w-full dark:bg-gray-500 outline-none "
            id="search-box"
            onChange={searchFilter}
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
}

export default FilterBox;
