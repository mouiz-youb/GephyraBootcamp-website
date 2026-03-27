import HousesLogic from "../images/HouseLogic.png"
import HouseInterface from "../images/HouseInterface.png"
import HouseVesion from "../images/HouseVesion.png"
import HouseArryn from "../images/HouseArryn.jpg"
import HouseTargaryen from "../images/HouseTyrell.jpg"
import HousesCard from "./HousesCard"
import { useState , useEffect } from "react"
import "../index.css"
function HousesCartDescriptions() {
    const houseDetails = [
        {
            houseImage : HouseVesion,
            borderColor : "gold-border",
            cardGroup:"hover:shadow-gold-glow border hover:border-yellow-500 ",
            houseName : "House of Logic",
            houseDomain : "UI&UX Advanced course",
            houseDesc : "Master the intersection of visual art and psychological intent. Our House Vision course empowers designers to craft world-class digital experiences.",
            housList : ["UX Strategy & Cognitive Psychology","High-Fidelity Prototyping","Scalable Design Systems" , "Advanced Tool Mastery"],
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
            houseDomain : "Backend developments",
            houseDesc : "House of Core (or your chosen name) crafts the backbone of digital products, ensuring every system is scalable, secure, and lightning-fast",
            housList : ["API Architecture & Design","Database Modeling & Schema Design","Server-Side Logic & Integration" , "System Scalability & Security"],
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
            houseName : "House of Interface",
            houseDomain : "Frontend developements",
            houseDesc : "Specializes in premium frontend development, blending aesthetics with seamless user experiences. We craft intuitive digital interfaces shaping how users interact today.",
            housList : ["Responsive web design","Advanced Web Architecture","Design Systems" , "Complex UI Development"],
            houseColor : "text-silver",
            ForHous :"For Creative Minds" ,
            ForHousClassName :"text-slate-500 border bg-slate-500/10 group-hover:shadow-silver-glow",
             houseNameColor: "silver-text" ,
             houseDomainColor: "silver-text"
        },
        {
            houseImage : HouseArryn,
            cardGroup:"hover:shadow-blue-glow border hover:border-blue-500 ",
            houseName : "House of Arryn",
            borderColor : "blue-border",
            houseDomain : "Game developements",
            houseDesc : "House Vision masters the fusion of cutting-edge mechanics and breathtaking visuals, ensuring every player journey is seamless, engaging, and unforgettable",
            housList : ["Game Mechanics & Logic","Level Design & World Building","Character & Asset Creation" , "Game Engines"],
            houseColor : "text-blue-500",
            ForHous :"For Creative Minds" ,
             houseNameColor: "text-blue-500" ,
              ForHousClassName :"text-blue-500 border bg-blue-500/10 group-hover:shadow-blue-glow",
             houseDomainColor: "text-blue-400"
        },
        {
            houseImage : HouseTargaryen,
            cardGroup:"hover:shadow-green-glow border transition  hover:border-green-500 ",
            houseName : "House of Targaryen",
            borderColor : "green-border",
            houseDomain : "DevOps & Cloud Engineering ",
            houseDesc : "House Vision engineers the backbone of digital ecosystems, ensuring every deployment is seamless, secure, and infinitely scalable .",
            housList : ["Git & Github","CI/CD Pipeline Automation","Cloud Architecture & Strategy" , "Containerization & Orchestration"],
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
  // Add a state to detect mobile
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

// Update isMobile on resize
useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const cardvariants = {
  left: {
    x: isMobile ? 0 : "-100%",
    y: isMobile ? "-100%" : 0, // Stacked above
    scale: 0.5,
    zIndex: 1,
   opacity: isMobile?0:1, // Hide the far ones on mobile to save space
  },
  left1: {
    x: isMobile ? 0 : "-50%",
    y: isMobile ? "-40%" : 0,
    scale: 0.8,
    zIndex: 2,
   opacity: isMobile?0:1,
  },
  left2: { // CENTER / ACTIVE CARD
    x: 0,
    y: 0,
    scale: 1,
    zIndex: 5,
    opacity: 1,
  },
  left3: {
    x: isMobile ? 0 : "50%",
    y: isMobile ? "40%" : 0,
    scale: 0.8,
    zIndex: 2,
   opacity: isMobile?0:1,
  },
  left4: {
    x: isMobile ? 0 : "100%",
    y: isMobile ? "100%" : 0, // Stacked below
    scale: 0.5,
    zIndex: 1,
    opacity: isMobile?0:1,
  },
};
  return (
    <div id="houses" className="w-full flex justify-center    items-center flex-col gap-3 bg-black py-7 border-t border-gold">
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
        <div className={`w-full relative h-screen flex px-6 mt-10 justify-center items-center  gap-6 md:grid md:grid-cols-3 ${isMobile ? "h-[600px]" : "h-[500px]"}`}>
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
                        housList={house.housList}
                        ForHous={house.ForHous}
                        houseColor={house.houseColor}
                        animate={positions[positionIndex[index]]}
                        variants={cardvariants}
                    />
                ))
            }
            
        </div>
        <div className="w-full flex justify-center items-center ">
            <button 
            onClick={handeleNext}
            className=" z-50 px-8 py-3 border-2 border-gold cursor-pointer  text-gold font-bold rounded-full hover:bg-gold hover:text-black transition-all duration-300 active:scale-95"
        >
            REVOLVE THE HOUSES
        </button>
        </div>
    </div>
  )
}

export default HousesCartDescriptions
