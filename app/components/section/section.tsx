import React from "react"

interface SectionProps{
    name:string,
    image:string
}
const Section: React.FC<SectionProps> = ({name, image}) =>{
    return(
        <div className='bg-white items-center hover:bg-gray-200 flex w-full md:w-full h-6 md:h-12'> 
        <img src={image} className="rounded-full size-5 md:size-8 mr-4 md:mr-4 ml-2 md:ml-2 "/>
        <span className="flex-1">{name}</span>
        </div>

    )
}

export default Section