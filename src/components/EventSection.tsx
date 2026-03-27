import { FaCheck } from "react-icons/fa";
import thron from "../images/thron.png"
function EventSection() {
    const  listItem=[
        {
            text:" Intensive Days"
        },
        {
            text:" Expert Mentors"
        },
        {
            text:" Real Projects"
        },
    ]
    const cartItem=[
        {
            title:"House Vision",
            desc :"UI&UX",
            color :"text-yellow-500"
        },
        {
            title:"House Logic",
            desc :"Back-end",
            color :"text-red-500"
        },
        {
            title:"House Interface",
            desc :"Front-end",
            color :"text-gray-500"
        },
    ]
  return (
    <div id="about" className='flex w-full justify-center items-center flex-col md:flex-row  gap-3  bg-black md:px-5 '>
     <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-3 px-3 ">
         <header className="w-full flex justify-center items-start  font-cinzel flex-col gap-3  font-bold  text-4xl md:text-5xl  mb-6">
            <p className="gold-text"> The Battle for</p>
            <p className="silver-text"> Technical </p>
            <p className="silver-text">Supremacy</p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-gray-400 mt-8"></div>
        </header>
        <div className="w-full flex justify-center items-start flex-col  text-start text-gray-300 text-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Winter is coming, and with it, the ultimate coding bootcamp. <strong className="text-yellow-500">Game of Codes</strong> is not just an event—it's a conquest. Divided into three legendary Houses, participants will embark on a journey to master the realms of technology.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Whether you pledge allegiance to <span className="text-yellow-400">House Vision</span> (UI/UX), <span className="text-red-400">House Logic</span> (Back-end), or <span className="text-gray-400">House Interface</span> (Front-end), glory awaits those who dare to code.
            </p>
        </div>
        <div className="w-full flex  items-center flex-row gap-3 mb-7 ">
            {listItem.map((item,index)=>(
                <div key={index} className="flex w-1/3 justify-center items-center flex-col md:flex-row gap-2 text-gray-300 text-sm md:text-base">
                    <div className="w-5 h-5 flex justify-center items-center  rounded-full bg-yellow-500">
                        <FaCheck className="text-black text-xs" />
                    </div>  
                    <p className="text-yellow-500">{item.text}</p>
                </div>
            ))}
        </div>
     </div>
     <div className="w-full relative  md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-gray-500/20 rounded-2xl blur-2xl"></div>
        <div className="glass-card w-full flex justify-center items-center flex-col  p-3 rounded-2xl" >
            <div className="w-24 h-24 gold-border md:w-30 md:h-30  bg-gray-300 rounded-full flex items-center justify-center"> 
                <img src={thron} alt="" />
            </div>
            <div className=" w-full  p-8  flex justify-center items-center flex-col md:grid md:grid-cols-3   gap-3    ">
            {cartItem.map((item , index)=>(
                <div key={index} className="   flex justify-center items-center bg-black/50 z-30   w-full rounded-2xl flex-col gap-2 text-center p-5">
                    <p className={item.color + "  font-bold"}>{item.title}</p>
                    <p className="text-gray-300 text-sm ">{item.desc}</p>
                </div>
            ))}
        </div>
        </div>
     </div>
    </div>
  )
}

export default EventSection
