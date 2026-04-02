import EventLogo from "../images/EventLogo.png"
import Button from "./Button"
function HeroSection() {
  const house =[
    {
      name :"greate houses",
      number :5
    },
    {
      
      name :"Days of Battle",
      number :7
    },
    {
      name :"Opportunities",
      number :"∞"
    },
  ]
  return (
    <div id="hero" className="w-full flex justify-center items-center flex-col gap-3 relative pt-5 bg-black ">
      <div className="absolute inset-0 hero-gradient parallax-bg" data-speed="0.5"></div>
        
        {/*  Animated Background Elements  */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl float-animation"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <div className="w-24 h-24 gold-border md:w-30 md:h-30 animate-pulse bg-gray-300 rounded-full flex items-center justify-center"> 
            <img src={EventLogo} alt="" />
          </div>
          <div className="text-2xl flex justify-center items-center flex-col gap-3  font-bold text-gray-800">
            <p className="text-gold text-sm ">Gephyra Club Presents</p>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tigh font-cinzel flex justify-center items-center flex-col gap-3 ">
              <p className="gold-text text-glow block">GAME OF</p>
              <p className=" silver-text silver-glow block mt-2">CODES</p>
            </div>
            <p className="text-lg px-4 text-center  md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
                    Choose your House. Master your Craft. <span className="text-yellow-500">Win the Throne.</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-row gap-5 md:flex-row ">
          <Button label="applly now " to="https://docs.google.com/forms/d/e/1FAIpQLSeCfHVGCBSZrIkhvpol40e5s5znOLE2F6WkbctVY95Kp7DEhQ/viewform" className="btn-gold  pulse-gold md:px-8 md:py-4 "/>
          <Button label="learn more  " className=" border-yellow-500/50 md:px-8 md:py-4 text-yellow-500 hover:bg-yellow-500/10 transition-all"/>
        </div>
        <div className=" w-full md:w-1/2  px-3 md:px-0 grid grid-cols-3  gap-10 my-8  relative">
          {house.map((item,index)=>(
            <div key={index} className={`flex justify-center px-2 items-center text-center  flex-col gap-2 mt-10 border-white p-3   ${index === 0 ?``:`border-l`}  `}>
              <p className=" text-gray-800 font-cinzel  text-3xl font-bold gold-text">{item.number}</p>
              <p className="text-gray-400  text-xs md:text-sm capitalize">{item.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default HeroSection
