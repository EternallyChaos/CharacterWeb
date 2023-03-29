import { CharacterFilter } from "./CharacterFilter";
import { useState } from "react";
import { Database } from "../data/filterData";
import FilterBox from "./FilterBox";

function FilterPage() {
  const categoryList = [...new Set(Database.map((Val) => Val.category))];
  const [item, setItem] = useState(Database);

  const filterItem = (filter) => {
    const newItem = Database.filter((item) => {
      return item.category === filter;
    });
    setItem(newItem);
  };

  const searchFilter = (event) => {
    const query = event.target.value;
    let newList = [];
    newList = Database.filter((item) => {
      // return item.charName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      return item.charName.toLowerCase().includes(query.toLowerCase());
    });
    setItem(newList);
  };

  return (
    <div className=" bg-white dark:bg-[#2f3237] rounded-xl flex flex-col justify-start items-center">
      <FilterBox
        setItem={setItem}
        filterItem={filterItem}
        categoryList={categoryList}
        searchFilter={searchFilter}
      />
      <CharacterFilter item={item} />
    </div>
  );
}

export default FilterPage;
