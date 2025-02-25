import { useState } from 'react'

function StartScreen({ onStart }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      onStart(name)
    }
  }

  return (
    <div className="start-screen">
      <h2>Welcome to Trivia!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  )
}

export default StartScreen
