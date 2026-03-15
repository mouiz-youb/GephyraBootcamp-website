import ClubLogo from "../images/ClubLogo.png"
import { Link } from "react-router-dom"
import "../index.css"
import { CiMenuFries } from "react-icons/ci";
import Button from "./Button"
function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Houses", path: "/houses" },
    { name: "Agenda", path: "/agenda" },
    { name: "Mentors", path: "/mentors" },
    { name: "FAQ", path: "/faq" },
  ]
  // gold-border 
  // gold-text
  return (
    <div className="w-full h-20 flex justify-between px-5 items-center gap-4  border-b bg-black border-white/10 sticky top-0  z-50 ">
      <div className="flex justify-center items-center flex-row gap-3 ">
        <div className="gold-border w-10 h-10   rounded-full  flex justify-center items-center">
          <img src={ClubLogo} alt="Club Logo" className="w-full h-full  object-contain" />
        </div>
        <div className="gold-text text-xl font-bold font-cinzel">
          <p>Gephyra Club</p>
        </div>
      </div>
      <div className="md:hidden flex btn-gold p-2 rounded-2xl justify-center items-center ">
        <CiMenuFries className="  text-white  rounded-2xl  text-2xl cursor-pointer " />
      </div>
      <ul className="md:flex justify-evenly items-center hidden   md:h-full gap-8 md:w-2/3">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="text-white hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              {link.name}
            </Link>
          </li>
        ))}
          <Button label="apply now " className="" />
      </ul>
    </div>
  )
}

export default Navbar

// <div className="flex justify-evenly items-center flex-row  border w-full h-20 fixed top-0 bg-black p-3 ">
//       {/* logo  */}
//       <div className="flex justify-start items-center flex-row gap-4  w-1/3 h-full">
//         <div className="md:w-12 md:h-12 gold-border  rounded-full  flex justify-center items-center ">
//           <img src={ClubLogo} alt="Club Logo" className="w-full h-full  object-contain" />
//         </div>
//         <span className="gold-text text-xl font-bold font-cinzel">Gephyra Club</span>
//       </div>
//       {/* link list  */}
//       <ul className="md:flex justify-evenly items-center hidden   md:h-full gap-8 md:w-2/3">
//         {links.map((link) => (
//           <li key={link.path}>
//             <Link to={link.path} className="text-white hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//               {link.name}
//             </Link>
//           </li>
//         ))}
//           <Button label="apply now " className="" />
//       </ul>
//       {/* menu mobile section   */}
//       <div className="md:hidden flex justify-center items-center ">

//       </div>
//     </div>





