import { motion } from "framer-motion";

const timelineData = [
  { id: "01", title: "Day 1: The Gathering", desc: "Opening ceremony, house selection, and environment setup." },
  { id: "02-03", title: "Days 2-3: Training Grounds", desc: "Intensive workshops and hands-on sessions." },
  { id: "02-03", title: "Days 2-3: Training Grounds", desc: "Intensive workshops and hands-on sessions." },
  { id: "02-03", title: "Days 2-3: Training Grounds", desc: "Intensive workshops and hands-on sessions." },
  { id: "02-03", title: "Days 2-3: Training Grounds", desc: "Intensive workshops and hands-on sessions." },
];

export const Timeline = () => {
  return (
    <div className="bg-black w-full  text-white py-20 min-h-screen">
      <div className="relative max-w-5xl mx-auto px-4">
        
        {/* The Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <div key={index} className={`flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
              
              {/* Card Section */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[45%] p-6 border border-gold rounded-xl bg-gray-900/50 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-gold font-cinzel">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>

              {/* Central Node (The Circle) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-gold z-10">
                <div className="w-2 h-2 bg-gold rounded-full m-auto mt-[2px]" />
              </div>

              {/* Number Section */}
              <div className="w-[45%] px-6">
                <span className="text-4xl font-bold text-gold opacity-80">{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};