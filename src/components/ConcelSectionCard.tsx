interface ConcelSectionCardProps {
    mentorName :string 
    image :string  
    post :string 
    bg :string 
    textColor :string
    borderColor :string 
    hoverCart:string 
}

const  ConcelSectionCard:React.FC<ConcelSectionCardProps>=({mentorName , post  , image , bg , textColor  , borderColor ,hoverCart})=> {
  return (
    <div className={` w-full bg-gray-950 md:w-1/3 flex justify-center border items-center flex-row  gap-6 py-8 rounded-2xl px-3 cursor-pointer  ${hoverCart}  ${borderColor}`}>
      <div className={`w-16 h-16 rounded-full  flex justify-center items-center  ${bg}`}>
        <p className=" text-black font-bold text-2xl "> {image} </p>
      </div>
      <div className="flex justify-center items-start flex-col gap-3 ">
        <p className="text-white font-cinzel font-bold text-2xl "> {mentorName} </p>
        <p className={textColor}> {post} </p>
      </div>
    </div>
  )
}

export default ConcelSectionCard
