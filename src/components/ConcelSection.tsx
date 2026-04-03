import "../index.css"
import ConcelSectionCard from './ConcelSectionCard';
function ConcelSection() {
    const ConcelSectionData2=[
        {
            houseName: "House Vision Masters",
            houseColorClass: "gold-text",
            mentors: [
                { id: 1, mentorName: "Rayane Makhouf", post: "Senior UX Designer @ TechCorp", image: "RM", borderColor: "border-yellow-600", bg: "bg-gradient-to-br from-yellow-400 to-yellow-600", hoverCart:"hover:shadow-gold-glow border hover:border-yellow-500" , textColor: "gold-text" },
                { id: 2, mentorName: "Abbass Bilal", post: "Product Designer @ StartupX", image: "AB", borderColor: "border-yellow-600", bg: "bg-gradient-to-br from-yellow-400 to-yellow-600", hoverCart:"hover:shadow-gold-glow border hover:border-yellow-500" , textColor: "gold-text" },
            ]
        },
        {
            houseName: "House Vision Masters",
            houseColorClass: "text-red-600",
            mentors: [
                { id: 3, mentorName: "Amdjed Hallaci", post: "Senior UX Designer @ TechCorp", image: "AH", borderColor: "border-red-600", bg: "bg-gradient-to-br from-red-400 to-red-600", hoverCart:"hover:shadow-red-glow border hover:border-red-500" , textColor: "text-red-600" },
                { id: 4, mentorName: "Iles Aissou", post: "Product Designer @ StartupX", image: "IA", borderColor: "border-red-600", bg: "bg-gradient-to-br from-red-400 to-red-600", hoverCart:"hover:shadow-red-glow border hover:border-red-500" , textColor: "text-red-600" },
            ]
        },
        {
            houseName: "House of Interface Masters",
            houseColorClass: "text-gray-600",
            mentors: [
                { id: 5, mentorName: "Abdelmouiz Mustapha", post: "Full Stack web developer", image: "AM", borderColor: "border-gray-600", bg: "bg-gradient-to-br from-gray-400 to-gray-600", hoverCart:"hover:shadow-silver-glow border hover:border-gray-500" , textColor: "text-gray-600" },
                { id: 6, mentorName: "Monsif Monsif", post: "Full Stack web developer", image: "ML", borderColor: "border-gray-600", bg: "bg-gradient-to-br from-gray-400 to-gray-600", hoverCart:"hover:shadow-silver-glow border hover:border-gray-500" , textColor: "text-gray-600" },
            ]
        },
        {
            houseName: "House of Arryn Masters",
            houseColorClass: "text-blue-600",
            mentors: [
                { id: 1, mentorName: "Hamzaoui Louai", post: "Full Stack web developer & Game Developer", image: "HL", borderColor: "border-blue-600", bg: "bg-gradient-to-br from-blue-400 to-blue-600", hoverCart:"hover:shadow-blue-glow border hover:border-blue-500" , textColor: "text-blue-600" },
                // { id: 2, mentorName: "Maria Lannister", post: "Product Designer @ StartupX", image: "ML", borderColor: "border-blue-600", bg: "bg-gradient-to-br from-blue-400 to-blue-600", hoverCart:"hover:shadow-blue-glow border hover:border-blue-500" , textColor: "text-blue-600" },
            ]
        },
        {
            houseName: "House of Targaryen Masters",
            houseColorClass: "text-green-600",
            mentors: [
                { id: 1, mentorName: "Ech Team", post: "Senior DevOps Engineer", image: "ET", borderColor: "border-green-600", bg: "bg-gradient-to-br from-green-400 to-green-600", hoverCart:"hover:shadow-green-glow border hover:border-green-500" , textColor: "text-green-600" },
                // { id: 2, mentorName: "Maria Lannister", post: "Product Designer @ StartupX", image: "ML", borderColor: "border-green-600", bg: "bg-gradient-to-br from-green-400 to-green-600", hoverCart:"hover:shadow-green-glow border hover:border-green-500" , textColor: "text-green-600" },
            ]
        },
    ]
  return (
    <div id="mentors" className="w-full flex justify-center items-center flex-col gap-4 bg-black py-10 border-2 border-t-yellow-500 border-b-yellow-500 ">
      <header className="w-full flex justify-center items-center flex-col gap-5 ">
        <div className="w-full font-bold flex justify-center items-center flex-row gap-2 font-cinzel  ">
            <p className="gold-text text-2xl md:text-6xl">The </p>
            <span className="text-white text-2xl md:text-6xl ">Council</span>
        </div>
        <p className="text-slate-500 text-lg md:text-lg ">Learn from the realm's finest masters</p>
      </header>
      <div className="w-full backstark flex justify-evenly items-center flex-row flex-wrap gap-4 p-5 text-white ">
        {ConcelSectionData2.map((houses )=>(
            <div className="w-full flex justify-center items-center  flex-col gap-10 ">
                <h3 className={`text-center font-cinzel my-6 text-xl md:text-3xl font-bold uppercase tracking-widest ${houses.houseColorClass}`}>
                    {houses.houseName}
                </h3>
                <div className="w-full flex justify-evenly items-center flex-col md:flex-row gap-6  ">
                    {houses.mentors.map((mentor)=>(
                        <ConcelSectionCard
                            hoverCart={mentor.hoverCart}
                            textColor ={mentor.textColor}
                            bg={mentor.bg}
                            mentorName ={mentor.mentorName}
                            image ={mentor.image}
                            post ={mentor.post}
                            borderColor={mentor.borderColor}
                            />
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ConcelSection
