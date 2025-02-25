function HighScores({ onBack }) {
  const highScores = JSON.parse(localStorage.getItem('highScores') || '[]')

  return (
    <div className="high-scores">
      <h2>High Scores</h2>
      <div className="scores-list">
        {highScores.map((score, index) => (
          <div key={index} className="score-item">
            <span>{index + 1}. {score.name}</span>
            <span>{score.score} points</span>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back to Start</button>
    </div>
  )
}

export default HighScores
