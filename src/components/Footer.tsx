import ClubLogo from "../images/ClubLogo.png"
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import  {Link} from "react-router-dom"
function Footer() {
    const footerdataQuickLink=[
        {
            id:1,
            name :"about "
        },
        {
            id:1,
            name :"agenda "
        },
        {
            id:1,
            name :"houses "
        },
        {
            id:1,
            name :"concel "
        }
    ]
    const Sm=[
        {
            id:1,
            icon :<MdOutlineEmail className="w-5 h-5"/>
        },
        {
            id:2,
            icon :<FaInstagram className="w-5 h-5"/>
        },
    ]
  return (
   <div className="w-full flex justify-center items-center flex-col gap-5 bg-black ">
         <div className="w-full flex justify-center items-center flex-col md:flex-row  gap-5  py-10">
      <div className=" w-full md:w-1/3 flex justify-center items-center flex-col">
        <div className="flex w-full justify-center items-center flex-row gap-3 ">
        <div className="gold-border w-10 h-10   rounded-full  flex justify-center items-center">
          <img src={ClubLogo} alt="Club Logo" className="w-full h-full  object-contain" />
        </div>
        <div className="gold-text text-xl font-bold font-cinzel">
          <p>Gephyra Club</p>
        </div>
      </div>
      <div className=" flex w-full justify-center items-center px-5 mt-6 ">
             <p className="text-center text-slate-600 text-sm ">
                A legendary bootcamp hosted by Gephyra Club. Join us in the ultimate battle of code, creativity, and logic.
            </p>
        </div>
      </div>
     <div className="w-full  md:w-2/3 flex justify-center items-center flex-row gap-5  ">
        <div className="w-1/2 flex justify-center items-center flex-col gap-5 ">
            <h3 className="text-xl font-bold text-white "> Quick Links </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                {
                footerdataQuickLink.map((item , index )=>(
                    <div key={index} className="capitalize cursor-pointer  text-white flex justify-center items-center flex-col">
                        <p className="hover:text-yellow-500 transition-colors"> {item.name} </p>
                    </div>
                ))
                }
            </div>
        </div>
        <div className="w-1/2 flex justify-start items-center flex-col gap-5 ">
            <h3 className="text-xl font-bold text-white "> Follow Us </h3>
            <div className="flex justify-center items-center flex-row gap-5 ">
                {
                Sm.map((item , index )=>(
                    <div key={index} className="text-white flex justify-center items-center flex-col w-10 h-10 rounded-full bg-white/5 hover:bg-yellow-500/20 hover:text-yellow-500 transition-all">
                        <Link to=""> {item.icon} </Link>
                    </div>
                ))
                }
            </div>
        </div>
     </div>
     
         </div>
         <div className="w-full flex justify-center items-center border-t border-silver py-10 ">
        <p className="silver-text text-sm ">
            © 2024 Gephyra Club. All rights reserved.
        </p>
     </div>
   </div>
  )
}

export default Footer



 