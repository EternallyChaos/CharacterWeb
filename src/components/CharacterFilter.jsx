function CharacterFilter({ item }) {
  return (
    <>
      <div className=" p-4 mb-4 sm:p-4 dark:bg-[#2f3237]  rounded-xl grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-6">
        {item.map((value) => {
          return (
            <div
              className=" flex flex-col items-center justify-center p-2 shadow-md dark:hover:bg-[#666b73] dark:bg-[#40444cb4] bg-gray-200 rounded-md"
              key={value.id}
            >
              <div className="relative z-0">
                <img
                  className=" sm:max-h-32 max-w-md max-h-28"
                  src={value.imagePath}
                  alt=""
                />
                <img
                  className="absolute z-1 left-0 top-0 h-7 w-7"
                  src={value.icon}
                  alt=""
                />
              </div>
              <p className="text-center dark:text-white text-md mt-1">
                {value.charName}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { CharacterFilter };
