import { GiCrossedSwords } from "react-icons/gi";
import Button from "./Button";
import { motion } from "framer-motion";
import "../index.css"
interface HousesCardProps {
    houseImage : string;
    houseName : string;
    houseNameColor : string;
    houseDomain? : string;
    houseDomainColor? : string;
    houseDesc : string;
    housList? : string[];
    ForHous  : string;
    ForHousClassName:string
    houseColor? : string;
    cardGroup :string 
    variants?: any; // Add these for Framer Motion
    animate?: string;
    borderColor   :string 
}
const HousesCard:React.FC<HousesCardProps> = ({ houseImage, houseName , houseDomain, houseDesc, housList, ForHous, houseColor ,houseNameColor ,houseDomainColor , ForHousClassName , cardGroup, borderColor , variants, animate }) => {
  return (
    <motion.div variants={variants} animate={animate}  initial="center"  transition={{ duration: 0.5 }} 
    className={` absolute w-9/10  md:w-1/3 md:top-0 md:left-[35%] bg-black/90 flex justify-center cursor-pointer items-center flex-col gap-3 border border-gray-700 px-5 py-8 rounded-2xl  ${cardGroup} group  `}>
      <div className={`flex justify-center items-center w-24 h-24 ${borderColor}   rounded-full `}>
        <img src={houseImage} alt={houseName} className="w-16 h-16 rounded-full " />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-3 ">
        <div className="w-full flex justify-center items-center flex-col gap-2 ">
            <p className={`text-2xl ${houseNameColor} font-bold font-cinzel`}>{houseName}</p>
            <p className={`${houseDomainColor} text-sm`}>{houseDomain}</p>
        </div>
        <p className="text-sm text-gray-400 text-center px-5">{houseDesc}</p>
        <ul className=" w-full  px-5 list-disc list-inside  text-sm flex justify-start items-start flex-col gap-2 ">
            {housList && housList.map((item, index) => (
                <div  key={index} className="flex justify-center items-center gap-2 ">
                    <GiCrossedSwords className={`${houseColor} text-lg`} />
                    <li className="text-gray-400">{item}</li>
                </div>
            ))}
        </ul>
        <div className="flex justify-center items-center w-full mt-5 ">
            <Button label={ForHous} className={ForHousClassName}/>
        </div>
      </div>
    </motion.div>
  )
}

export default HousesCard





//    const cardvariants = {
//     left: {
//       x: "-100%",
//       scale: 0.5,
//       zIndex: 1,
//     },
//     left1: {
//       x: "-50%",
//       scale: 0.7,
//       zIndex: 2,
//     },
//     left2: {
//       x: "0",
//       scale: 1,
//       zIndex: 5,
//     },
//     left3: {
//       x: "50%",
//       scale: 0.7,
//       zIndex: 2,
//     },
//     left4: {
//       x: "100%",
//       scale: 0.5,
//       zIndex: 1,
//     },
//   };