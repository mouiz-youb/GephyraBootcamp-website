import ClubLogo from "../images/ClubLogo.png"
import { FaX } from "react-icons/fa6";
import "../index.css"
import { CiMenuFries } from "react-icons/ci";
import Button from "./Button"
import {motion , AnimatePresence} from "framer-motion"
import { useState , type Dispatch,type  SetStateAction  } from "react";
function Navbar() {
  const[show,setShow]=useState(false)
  const links = [
    { name: "Hero", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Houses", path: "#houses" },
    { name: "Agenda", path: "#agenda" },
    { name: "Mentors", path: "#mentors" },
    { name: "Contact", path: "#contact" },
  ]
  return (
    <div className="w-full h-20  flex justify-between px-5 items-center gap-4  border-b bg-black border-white/10 fixed top-0  z-50 ">
      <div className="flex justify-center items-center flex-row gap-3 ">
        <div className="gold-border w-10 h-10   rounded-full  flex justify-center items-center">
          <img src={ClubLogo} alt="Club Logo" className="w-full h-full  object-contain" />
        </div>
        <div className="gold-text text-xl font-bold font-cinzel">
          <p>Gephyra Club</p>
        </div>
      </div>
      <div className={show?`hidden`:`md:hidden relative flex btn-gold p-2 rounded-2xl justify-center items-center`}>
        <CiMenuFries onClick={() => setShow(prev => !prev)}className="  text-white  rounded-2xl  text-2xl cursor-pointer " />
      </div>
      <AnimatePresence>
        {show && <Menu linkList={links} setshowMenu={setShow} showMenu={show}/>}
      </AnimatePresence>
      <ul className="md:flex justify-evenly items-center hidden   md:h-full gap-8 md:w-2/3">
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path} className="text-white hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              {link.name}
            </a>
          </li>
        ))}
          <Button label="apply now " className="btn-gold " />
      </ul>
    </div>
  )
}

export default Navbar
interface LinkItem {
  name: string;
  path: string;
}
interface MenuProps {
  showMenu :boolean
 setshowMenu: Dispatch<SetStateAction<boolean>>;
  linkList:LinkItem[]
}
const Menu:React.FC<MenuProps> = ({showMenu , setshowMenu , linkList})=>{
  console.log(showMenu)
return(
  <motion.div 
  initial={{ opacity: 0, x: "100%" }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: "100%" }}
  transition={{ ease:"circOut", duration:0.4}}
  className={!showMenu ?``:`flex justify-start items-center flex-col  gap-5  absolute top-[0%] right-0  bg-white/5 backdrop-blur-lg rounded-2xl  z-40 w-[75vw] h-screen`}>
    <div className="flex justify-end px-3 items-center w-full">
        <div className="rounded-2xl btn-gold flex justify-end  items-center p-2.5 mt-5  ">
          <FaX onClick={() => setshowMenu(!showMenu)} className="text-2xl cursor-pointer text-white font-bold"/>
        </div>
    </div>
   <ul className="flex justify-center items-center w-full flex-col gap-7   ">
        {linkList.map((link) => (
          <li key={link.path}>
            <a href={link.path} className="text-white text-2xl hover:text-yellow-500 transition-colors px-3 py-2 rounded-md  font-medium">
              {link.name}
            </a>
          </li>
        ))}
          <Button label="apply now " className="btn-gold " />
      </ul>
  </motion.div>
)
}

