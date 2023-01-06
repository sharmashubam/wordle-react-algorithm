import React, { useContext } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Context } from '../Context';
const Play = () => {

    const { setPlay } = useContext(Context)
    const clickHandler = () => {
        setPlay(false);
    }
    return (
        <div className='w-[94%] xl:w-[50%] md:w-[70%] mx-auto'>
            <div className=''>
                <div className='flex justify-between items-center w-full rounded-md shadow-xl bg-[#3a3b3a] py-3 mt-4 md:py-4 px-2 '>
                    <p className='text-center text-lg font-bold px-6 md:px-12'>How to Play ?</p>
                    <AiOutlineClose size={25} className="font-bold hover:cursor-pointer" onClick={clickHandler} />
                </div>
                <div className='mt-4'>
                    <p className='text-center w-[80%] mx-auto font-mono '> You have to guess the hidden word in 6 tries and the color of the letters changes to show how close you are.
                        To start the game, just enter any word, for example: </p>
                    <div className='flex justify-center gap-4 items-center mt-3bg-[#b49f39] mt-4'>

                        <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>T</h1>
                        <h1 className='border p-4 font-bold bg-[#3a393c] text-4xl'>A</h1>
                        <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>B</h1>
                        <h1 className='border p-4 font-bold bg-[#3a393c] text-4xl'>L</h1>
                        <h1 className='border p-4 font-bold bg-[#b49f39] text-4xl'>E</h1>
                    </div>
                </div>

                <div className=' w-fit  mx-auto flex items-start justify-start '>
                    <div className='flex flex-col gap-2  rounded-xl py-12 '>
                        <div className=' flex justify-start'>
                            <span className='text-xl border px-2 bg-[#3a393c] font-bold mr-2'>L</span> , <span className=' mx-2 border text-xl bg-[#3a393c] px-2 font-bold'>A</span> aren't in the target word at all.
                        </div>
                        <div className=' flex justify-start'>
                            <span className='text-xl border px-2 bg-[#b49f39] mr-2 font-bold'>E</span> is in the word but in the wrong spot.
                        </div>
                        <div className=' flex justify-start'>
                            <span className='text-xl border px-2 font-bold mr-2 bg-[#528d4e]'>T</span> , <span className='mx-2 border text-xl px-2 font-bold bg-[#528d4e]'>B</span> are in the word and in the correct spot.
                        </div>


                    </div>
                </div>

                <div className='flex justify-center gap-4 items-center mt-3bg-[#b49f39] mt-6 xl:mt-12'>

                    <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>F</h1>
                    <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>L</h1>
                    <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>A</h1>
                    <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>M</h1>
                    <h1 className='border p-4 font-bold bg-[#528d4e] text-4xl'>E</h1>
                </div>
                <p className='text-center font-bold mt-4'>Congratulations,You guesses it! Right
                </p>


            </div>

        </div>
    )
}

export default Play