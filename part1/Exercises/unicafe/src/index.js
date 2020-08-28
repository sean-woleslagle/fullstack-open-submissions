import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Heading  = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const App = (props) => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => setClicks({
    ...clicks, good: clicks.good + 1
  })

  const handleNeutralClick = () => setClicks({
    ...clicks, neutral: clicks.neutral + 1
  })

  const handleBadClick = () => setClicks({
    ...clicks, bad: clicks.bad + 1
  })

  const sumClicks = () => ( clicks.good + clicks.bad + clicks.neutral )
  const trueSum = () => (clicks.good + clicks.neutral - clicks.bad)
  const average = () => (trueSum() / )
  const positive = () =>

  return (
    <div>
      <Heading text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Heading text='statistics' />
      <Statistics text='good' value={clicks.good} />
      <Statistics text='neutral' value={clicks.neutral} />
      <Statistics text='bad' value={clicks.bad} />
      <Statistics text='all' value={sumClicks()} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)