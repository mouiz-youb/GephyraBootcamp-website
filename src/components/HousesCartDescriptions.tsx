import HousesLogic from "../images/HouseLogic.png"
import HouseInterface from "../images/HouseInterface.png"
import HouseVesion from "../images/HouseVesion.png"
import HouseArryn from "../images/HouseArryn.jpg"
import HouseTargaryen from "../images/HouseTyrell.jpg"
import HousesCard from "./HousesCard"
import {motion} from "framer-motion"
import { useState } from "react"
import "../index.css"
function HousesCartDescriptions() {
    const houseDetails = [
        {
            houseImage : HouseVesion,
            borderColor : "gold-border",
            cardGroup:"hover:shadow-gold-glow border hover:border-yellow-500 ",
            houseName : "House of Logic",
            houseDomain : "Data Science & AI",
            houseDesc : "Masters of aesthetics and user experience. House Vision crafts the face of digital products, ensuring every interaction is intuitive and beautiful.",
            housList : ["User Research & Personas","Wireframing & Prototyping","Design Systems" , "Figma & Adobe XD"],
            houseColor : "text-yellow-500",
            ForHous :"For Creative Minds",
            ForHousClassName :"text-yellow-500 border bg-yellow-500/10 group-hover:shadow-gold-glow",
            houseNameColor: "gold-text" ,
            houseDomainColor: "text-yellow-500"
        },
        {
            houseImage : HousesLogic,
                borderColor : "red-border",
            cardGroup:"hover:shadow-red-glow border hover:border-red-500  ",
            houseName : "House of Logic",
            houseDomain : "Data Science & AI",
            houseDesc : "Masters of aesthetics and user experience. House Vision crafts the face of digital products, ensuring every interaction is intuitive and beautiful.",
            housList : ["User Research & Personas","Wireframing & Prototyping","Design Systems" , "Figma & Adobe XD"],
            houseColor : "text-red-500",
            ForHous :"For Creative Minds" ,
            ForHousClassName :"text-red-500 border bg-red-500/10 group-hover:shadow-red-glow",
            houseNameColor: "text-red-500" ,
            houseDomainColor: "text-red-400"
        },
        {
            houseImage : HouseInterface ,
            borderColor : "silver-border",
            cardGroup:"hover:shadow-silver-glow  border hover:border-silver ",
            houseName : "House of Logic",
            houseDomain : "Data Science & AI",
            houseDesc : "Masters of aesthetics and user experience. House Vision crafts the face of digital products, ensuring every interaction is intuitive and beautiful.",
            housList : ["User Research & Personas","Wireframing & Prototyping","Design Systems" , "Figma & Adobe XD"],
            houseColor : "text-silver",
            ForHous :"For Creative Minds" ,
            ForHousClassName :"text-slate-500 border bg-slate-500/10 group-hover:shadow-silver-glow",
             houseNameColor: "silver-text" ,
             houseDomainColor: "silver-text"
        },
        {
            houseImage : HouseArryn,
            cardGroup:"hover:shadow-blue-glow border hover:border-blue-500 ",
            houseName : "House of Logic",
            borderColor : "blue-border",
            houseDomain : "Data Science & AI",
            houseDesc : "Masters of aesthetics and user experience. House Vision crafts the face of digital products, ensuring every interaction is intuitive and beautiful.",
            housList : ["User Research & Personas","Wireframing & Prototyping","Design Systems" , "Figma & Adobe XD"],
            houseColor : "text-blue-500",
            ForHous :"For Creative Minds" ,
             houseNameColor: "text-blue-500" ,
              ForHousClassName :"text-blue-500 border bg-blue-500/10 group-hover:shadow-blue-glow",
             houseDomainColor: "text-blue-400"
        },
        {
            houseImage : HouseTargaryen,
            cardGroup:"hover:shadow-green-glow border transition  hover:border-green-500 ",
            houseName : "House of Logic",
            borderColor : "green-border",
            houseDomain : "Data Science & AI",
            houseDesc : "Masters of aesthetics and user experience. House Vision crafts the face of digital products, ensuring every interaction is intuitive and beautiful.",
            housList : ["User Research & Personas","Wireframing & Prototyping","Design Systems" , "Figma & Adobe XD"],
            houseColor : "text-green-500",
             ForHousClassName :"text-green-500 border bg-green-500/10 group-hover:shadow-green-glow",
            ForHous :"For Creative Minds" ,
             houseNameColor: "text-green-500" ,
             houseDomainColor: "text-green-400"
        },

    ]
      const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
       const handeleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  const positions = ["left", "left1", "left2", "left3", "left4"];
   const cardvariants = {
    left: {
      x: "-100%",
      scale: 0.5,
      zIndex: 1,
    },
    left1: {
      x: "-50%",
      scale: 0.7,
      zIndex: 2,
    },
    left2: {
      x: "0",
      scale: 1,
      zIndex: 5,
    },
    left3: {
      x: "50%",
      scale: 0.7,
      zIndex: 2,
    },
    left4: {
      x: "100%",
      scale: 0.5,
      zIndex: 1,
    },
  };
  return (
    <div className="w-full flex justify-center    items-center flex-col gap-3 bg-black py-7 border-t border-gold">
        <header className="w-full flex justify-center items-center flex-col gap-3 ">
            <div className="flex justify-center text-3xl md:text-5xl font-bold items-center flex-row gap-2 font-cinzel ">
                <p className="gold-text">Choose Your </p>
                <span className="silver-text">House</span>
            </div>
            <div className="flex w-full md:text-lg justify-center items-center px-3 text-slate-500 text-center ">
                <p>
                    five houses, five paths to glory. Each house specializes in a different domain of the digital realm.
                </p>
            </div>
        </header>
        <div className="w-full relative h-screen flex px-6 mt-10 justify-center items-center flex-col gap-6 md:grid md:grid-cols-3">
            {
                houseDetails.map((house,index)=>(
                    <HousesCard 
                        key={index}
                        cardGroup={house.cardGroup}
                        ForHousClassName={house.ForHousClassName}
                        houseImage={house.houseImage}
                        borderColor={house.borderColor}
                        houseNameColor={house.houseNameColor}
                        houseDomainColor={house.houseDomainColor}
                        houseName={house.houseName}
                        houseDomain={house.houseDomain}
                        houseDesc={house.houseDesc}
                        animate={positions[positionIndex[index]]}
                        variants={cardvariants}
                        housList={house.housList}
                        ForHous={house.ForHous}
                        houseColor={house.houseColor}
                    />
                ))
            }
            
        </div>
        <div className="w-full flex justify-center items-center ">
            <button 
            onClick={handeleNext}
            className=" px-8 py-3 border-2 border-gold cursor-pointer  text-gold font-bold rounded-full hover:bg-gold hover:text-black transition-all duration-300 active:scale-95"
        >
            REVOLVE THE HOUSES
        </button>
        </div>
    </div>
  )
}

export default HousesCartDescriptions
