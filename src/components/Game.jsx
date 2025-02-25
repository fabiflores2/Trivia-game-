import { useState, useEffect } from 'react'

function Game({ questions, onGameEnd, score, setScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30) // 30 seconds per question

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          onGameEnd()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestion, onGameEnd])

  useEffect(() => {
    setTimeLeft(30) // Reset timer when question changes
  }, [currentQuestion])

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      // Add bonus points based on time left
      const timeBonus = Math.floor(timeLeft / 2)
      setScore(score + questions[currentQuestion].points + timeBonus)
    }

    if (currentQuestion === questions.length - 1) {
      onGameEnd()
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <div className="game">
      <div className="game-header">
        <div className="score">Score: {score}</div>
        <div className="timer" style={{ color: timeLeft <= 10 ? '#ff4444' : '#fff' }}>
          Time Left: {timeLeft}s
        </div>
      </div>
      <div className="question-container">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game
