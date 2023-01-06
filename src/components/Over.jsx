import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'

const Over = () => {
    const{gameOver,setGameOver,correctWord}= useContext(Context);
  return (
    <div className='gameOver mt-8'>
        <h3 className='font-bold text-2xl'>{gameOver.guessedWord?"Congratulations! You Guessed Correctly": "You Lost " }</h3>
        <h1 className='font-bold mt-2 '>Correct Word  : {correctWord.toUpperCase()}</h1>
    </div>
  )
}

export default Over