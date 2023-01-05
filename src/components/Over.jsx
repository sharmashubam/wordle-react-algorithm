import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'

const Over = () => {
    const{gameOver,setGameOver,correctWord}= useContext(Context);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord?"Congratulations! Tou Guessed Correvtly": "You Lost " }</h3>
        <h1>Correct Word: {correctWord}</h1>
    </div>
  )
}

export default Over