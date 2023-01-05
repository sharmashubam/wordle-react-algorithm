import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Context } from '../Context'

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord,currAttempt, disabledLetters,setDisabledLetters} = useContext(Context);

  const letter = board[attemptVal][letterPos]

  const correct = correctWord.toUpperCase()[letterPos] == letter
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
  const letterState =(currAttempt.attempt > attemptVal) && (correct ? "correct" : almost ? "almost" : "error")


  useEffect(()=>{
    if(!correct && letter !== "" && !almost ){
      setDisabledLetters((prev)=>{
        return [...prev,letter]
      })
    }

  },[currAttempt.attempt])

  return (
    <div className='letter' id={letterState} >{letter}</div>
  )
}

export default Letter