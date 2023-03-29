import { characters } from "../data/characters";

const amberData = characters.filter((data) => data.id === "amber");

function SectionIntro() {
  return (
    <>
      {amberData.map((item) => (
        <div
          key={item}
          className=" my-2 p-1 bg-white dark:bg-[#2f3237] bg-clip-border shadow-lg rounded-xl flex flex-col justify-center items-center gap-4 md:flex-row"
        >
          <div className=" flex-1 xl mb-3">
            <img className=" max-w-full h-auto " src={item.imgpath} alt="" />
          </div>
          <div className=" flex-1 my-1 p-4">
            <h2 className=" text-orange-500 text-xl">{item.name}</h2>
            <span className=" inline-flex gap-2.5 my-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className=" border-none text-white bg-orange-500 border px-2 py-1 rounded shadow"
                >
                  {tag}
                </span>
              ))}
            </span>
            <p className=" dark:text-white">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export { SectionIntro };

// import Amber from "../assets/Amber.jpg";

// function SectionIntro() {
//   return (
//     <section className=" my-2 p-1 bg-white dark:bg-[#2f3237] bg-clip-border shadow-lg rounded-xl flex flex-col justify-center items-center gap-4 md:flex-row">
//       <div className="flex-1 xl:mb-3">
//         <img className=" max-w-full h-auto " src={Amber} alt="" />
//       </div>
//       <div className="flex-1 my-1 p-4">
//         <h2 className=" text-orange-500 text-xl">Amber</h2>
//         <span className="inline-flex gap-2.5 my-2">
//           <span className=" border-none text-white bg-orange-500 border px-2 py-1 rounded shadow">
//             Mondstadt
//           </span>
//           <span className="border-none text-white bg-orange-500 border px-2 py-1 rounded shadow">
//             Outrider
//           </span>
//           <span className="border-none text-white bg-orange-500 border px-2 py-1 rounded shadow">
//             Pyro
//           </span>
//         </span>
//         <p className="dark:text-white">
//           Amber is a playable Pyro character in Genshin Impact. As the only
//           remaining Outrider of the Knights of Favonius, she is always ready to
//           help the citizens of Mondstadt — whether it be something simple or
//           perhaps a more challenging task.
//         </p>
//       </div>
//     </section>
//   );
// }
// export { SectionIntro };
