function EndScreen({ score, onPlayAgain, onViewHighScores }) {
  return (
    <div className="end-screen">
      <h2>Game Over!</h2>
      <p>Your final score: {score}</p>
      <p className="score-info">
        (Including time bonus points for quick answers!)
      </p>
      <div className="buttons">
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onViewHighScores}>View High Scores</button>
      </div>
    </div>
  )
}

export default EndScreen
