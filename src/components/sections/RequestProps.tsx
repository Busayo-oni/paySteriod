import React from 'react'
import todoList from "../../assets/icons/todoList.png";
import { ChevronRight } from 'lucide-react';


interface RequestProps {
    disc: string,
    sub: string

}

const RequestProps: React.FC<RequestProps> = ({ disc, sub }) => {
  return (
    <div  className="flex items-center w-full justify-between bg-white my-4 p-6 rounded-2xl shadow-sm border border-gray-300">
        <div className='flex items-center gap-4'>
        <img src={todoList} alt="" width='50px' />
        <div >
            <p className='text-[#48464E] font-bold text-base  '>{disc}</p>
            <p className='text-[#908C9C] font-normal text-base  '>{sub} </p>
        </div>
        </div>
        <ChevronRight color='#908C9C' />
    </div>
  )
}

export default RequestProps