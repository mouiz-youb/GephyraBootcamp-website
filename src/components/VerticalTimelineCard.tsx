import {motion} from "framer-motion"

interface VerticalTimelineCardProps {
    title:string
    desc :string 
    index :number 
    className :string 
    textColor:string 
}
const  VerticalTimelineCard:React.FC<VerticalTimelineCardProps>=({title , desc , index , className , textColor })=> {
  return (
    <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`w-full py-6 text-center px-2 glass-card rounded-xl flex justify-center items-center flex-col gap-4 ${className}`}>
      <p className={`${textColor} font-cinzel md:text-2xl`}> {title} </p>
      <p className="text-slate-600 "> {desc} </p>
    </motion.div>
  )
}

export default VerticalTimelineCard
