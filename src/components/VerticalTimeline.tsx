import VerticalTimelineCard from "./VerticalTimelineCard";

function VerticalTimeline() {
    const timelineData = [
  { id: "01", title: "Day 1: The Gathering", bg:"bg-gold",border:"border-gold", textColor :"gold-text" , className :" border-r-4 border-yellow-500" ,  desc: "Opening ceremony, house selection, and environment setup." },
  { id: "02-03", title: "Days 2-3: Training Grounds", bg:"bg-red-500",border:"border-red-500", textColor :"text-red-500" , className :" border-r-4 border-red-500" ,  desc: "Intensive workshops and hands-on sessions." },
  { id: "02-03", title: "Days 2-3: Training Grounds", bg:"bg-silver ",border:"border-silver", textColor :"text-silver" , className :" border-r-4 border-silver" ,  desc: "Intensive workshops and hands-on sessions." },
  { id: "02-03", title: "Days 2-3: Training Grounds", bg:"bg-gold",border:"border-gold", textColor :"gold-text" , className :" border-r-4 border-yellow-500" ,  desc: "Intensive workshops and hands-on sessions." },
  { id: "02-03", title: "Days 2-3: Training Grounds", bg:"bg-red-500",border:"border-red-500", textColor :"text-red-500" , className :" border-r-4 border-red-500" ,  desc: "Intensive workshops and hands-on sessions." },
];
  return (
    <div className="w-full flex justify-center items-center flex-col z-20  text-white pt-10 bg-[#0A0A0A]">
      <header className="w-full flex justify-center items-center flex-col gap-5 ">
        <div className="w-full font-bold flex justify-center items-center flex-row gap-2 font-cinzel  ">
            <p className="gold-text text-2xl md:text-6xl">Battle </p>
            <span className="text-white text-2xl md:text-6xl ">Agenda</span>
        </div>
        <p className="text-slate-500 text-lg md:text-lg ">Seven days to prove your worth</p>
      </header>
      <div className="w-full flex flex-col justify-center items-center relative min-h-screen py-20 md:gap-6 ">
  {/* Central Line - Fixed Z-index and visibility */}
  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-0" />

  {timelineData.map((item, index) => (
    <div 
      key={index} 
      /* Desktop: Use Grid with 2 equal columns. Mobile: Use Flex-col */
      className={`relative w-full flex flex-col-reverse  mb-12 md:mb-0 md:grid  md:grid-cols-2 items-center gap-8 `}
    >
      
      {/* 1. Card Section */}
      <div className={`flex w-full px-5 md:px-16 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start md:order-last"}`}>
        <div className="w-full ">
             <VerticalTimelineCard 
               className ={item.className}
               textColor={item.textColor}
                index={index}
                title={item.title}
                desc={item.desc}
              />
        </div>
      </div>

      {/* 2. Central Node - Absolute only on Desktop */}
      <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-black border-2  z-20 items-center justify-center ${item.border}`}>
        <div className={`w-2 h-2 ${item.bg} rounded-full `} />
      </div>

      {/* 3. Number Section */}
      <div className={`flex px-10 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
        <span className={`text-5xl font-bold ${item.textColor} opacity-80 font-cinzel`}>
          {item.id}
        </span>
      </div>
      
    </div>
  ))}
</div>
    </div>
  )
}

export default VerticalTimeline
