import { characters } from "../data/characters";

function SectionDetails() {
  return (
    <div className=" p-4 my-4 bg-white dark:bg-[#2f3237] bg-clip-border shadow-lg rounded-xl flex flex-col justify-start items-center gap-4">
      <h3 className="text-center text-orange-500 text-xl mt-1 underline underline-offset-4">
        Amber: Details
      </h3>
      <div className="flex flex-col justify-start items-center gap-4 md:flex-row">
        <div className=" flex-1 p-4 bg-gray-100 dark:bg-[#40444cb4] rounded-lg ">
          <h3 className=" text-orange-500 text-xl mb-2 ">Personality</h3>
          <p className="dark:text-white my-1">
            Outrider for the Knights of Favonius, Amber is described as "a model
            for justice" by Kaeya. She fulfills her duties as an Outrider
            diligently, even though she's the only one left in the said platoon.
            She abides by the rules, except for when using her wind glider,
            having her gliding license revoked numerous times. She has an
            outgoing personality, as one might find her talking to strangers as
            if they're acquaintances. She is passionate in everything she does,
            may it be helping the citizens or purging hilichurls. She wishes to
            be as great as her grandfather, a once loyal defender of Mondstadt.
            Even after he disappeared, she still defends Mondstadt in his place.
          </p>
        </div>
        <div className=" flex-1 p-4 bg-gray-100 dark:bg-[#40444cb4] rounded-lg">
          <h3 className=" text-orange-500 text-xl mb-2">Character Stories</h3>
          <p className="dark:text-white my-1 ">
            Amber is an Outrider of the Knights of Favonius. In an age where
            Outriders are becoming obsolete, she continues on with her
            responsibilities. It takes a newcomer only a few days to feel right
            at home with this passionate girl. Whether it's before the Good
            Hunter's signboard, the banks of Cider Lake, or the tree tops at
            Windrise, one can find traces of this vigilant Outrider in red
            anywhere. Once spotted by her, no suspicious individual can ever
            escape her interrogation. Life in the Knights of Favonius was not
            easy for Amber in the beginning. Being as young as she was and
            having just lived through the trauma of losing her grandpa, the
            senior knights made a point of taking special care of her.
          </p>
        </div>
      </div>
    </div>
  );
}
export { SectionDetails };
