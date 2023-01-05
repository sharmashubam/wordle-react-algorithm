import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import Over from './components/Over';
import { Context } from './Context';
import { boardDefault, generateWordSet ,todaysWord} from './words';

function App() {
  const [board, setBoard] = useState(boardDefault)
  let [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [correctWord,setCorrectWord] = useState("")
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [wordSet, setWordSet] = useState(new Set())
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })

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
      setGameOver({gameOver:true, guessedWord:true})
    }
     if(currAttempt.attempt===5){
      setGameOver({gameOver:true,guessedWord:false })
     }
  }

  return (
    <Context.Provider value={{ board, setBoard, disabledLetters, setCurrAttempt,gameOver,setGameOver,setDisabledLetters, currAttempt, onDelete, onEnter, onSelectLetter, correctWord }}>
      <div className='App' >
        <nav>
          <h1>WORDLE</h1>
        </nav>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <Over/>:<KeyBoard />}
        </div>

      </div>
    </Context.Provider>

  );
}

export default App;
