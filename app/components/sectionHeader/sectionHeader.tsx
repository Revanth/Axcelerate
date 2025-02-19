import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

type Action = "Attended"|"Absent"

interface SectionHeaderProps {
    activity: Action,
    onClick: (event: React.MouseEvent, message:string) => void
  }

  
const SectionHeader: React.FC<SectionHeaderProps> = ({activity, onClick}) =>{
    return (
        <div onClick={(e:React.MouseEvent) => onClick(e, activity)} className='bg-white hover:bg-gray-100 items-center flex w-3/4 md:w-1/2 h-6 md:h-12 border-t border-b border-gray-300'>
                    <span className="flex-1 mr-4 md:mr-4 ml-2 md:ml-2">{activity}</span>
                    <i id={activity+"icon"} className="rounded-full size-5 md:size-8  bi bi-chevron-down mr-4 md:mr-4 ml-2 md:ml-2"></i>
            </div>

    )
}

export default SectionHeader