import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import Over from './components/Over';
import { Context } from './Context';
import { boardDefault, generateWordSet, todaysWord } from './words';
import { AiFillSetting, AiOutlineQuestionCircle } from "react-icons/ai";
import Play from './components/Play';
import Setting from './components/Setting';

function App() {
  const [board, setBoard] = useState(boardDefault)
  let [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [correctWord, setCorrectWord] = useState("")
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [wordSet, setWordSet] = useState(new Set())
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [play, setPlay] = useState(false);
  const [setting, setSetting] = useState(false)

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
    })
  }, [])


  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })

  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }

  const onEnter = () => {
    if (currAttempt.letterPos < 5) return
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ letterPos: 0, attempt: currAttempt.attempt + 1 })
    } else {
      alert("Word not found");
    }
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true })
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false })
    }
  }

  const playHandler = () => {
    setPlay(true);
    setSetting(false)
  }

  const settingHandler = () => {
    setSetting(true);
    setPlay(false)
  }

  return (
    <Context.Provider value={{ play, setPlay, setting, setSetting, board, setBoard, disabledLetters, setCurrAttempt, gameOver, setGameOver, setDisabledLetters, currAttempt, onDelete, onEnter, onSelectLetter, correctWord }}>
      <div className='App' >


        <nav className='w-fit mx-auto h-fit flex items-center justify-center gap-24 border-b-2 border-teal-500 py-2'>
          <div >
            <AiOutlineQuestionCircle className='hover:cursor-pointer' size={25} onClick={playHandler} />
          </div>
          <p className='text-2xl font-bold text-center'>WORDLE</p>
          <div>
            <AiFillSetting className='hover:cursor-pointer' size={25} onClick={settingHandler} />
          </div>
        </nav>



        {play ? <Play /> : setting ? <Setting /> :
          <div className='game'>
            <Board />
            {gameOver.gameOver ? <Over /> : <KeyBoard />}
          </div>
        }




      </div>
    </Context.Provider>

  );
}

export default App;
