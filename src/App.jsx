import { useState } from 'react'
import './App.css'
import questions from './data/questions.json'
import Game from './components/Game'
import StartScreen from './components/StartScreen'
import EndScreen from './components/EndScreen'
import HighScores from './components/HighScores'

function App() {
  const [gameState, setGameState] = useState('start') // start, playing, end, highscores
  const [score, setScore] = useState(0)
  const [playerName, setPlayerName] = useState('')

  const startGame = (name) => {
    setPlayerName(name)
    setGameState('playing')
    setScore(0)
  }

  const endGame = () => {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '[]')
    highScores.push({ name: playerName, score })
    highScores.sort((a, b) => b.score - a.score)
    localStorage.setItem('highScores', JSON.stringify(highScores.slice(0, 10)))
    setGameState('end')
  }

  return (
    <div className="app">
      <h1>Fun Trivia Game</h1>
      {gameState === 'start' && <StartScreen onStart={startGame} />}
      {gameState === 'playing' && (
        <Game 
          questions={questions.questions} 
          onGameEnd={endGame}
          score={score}
          setScore={setScore}
        />
      )}
      {gameState === 'end' && (
        <EndScreen 
          score={score} 
          onPlayAgain={() => setGameState('start')}
          onViewHighScores={() => setGameState('highscores')}
        />
      )}
      {gameState === 'highscores' && (
        <HighScores onBack={() => setGameState('start')} />
      )}
    </div>
  )
}

export default App
