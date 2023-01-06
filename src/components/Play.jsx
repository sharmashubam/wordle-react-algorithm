import React, { useContext } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Context } from '../Context';
const Play = () => {

    const {setPlay}= useContext(Context)
    const clickHandler=()=>{
        setPlay(false);
    }
  return (
    <div className='w-[94%] xl:w-[50%] md:w-[70%] mx-auto'>
        <div className=''>
        <div className='flex justify-between items-center w-full rounded-md shadow-xl bg-[#3a3b3a] py-3 mt-4 md:py-4 px-2 '>
            <p className='text-center text-lg font-bold px-6 md:px-12'>How to Play ?</p>
            <AiOutlineClose size={25} className="font-bold hover:cursor-pointer" onClick={clickHandler}/>
        </div>
        </div>
        
    </div>
  )
}

export default Play