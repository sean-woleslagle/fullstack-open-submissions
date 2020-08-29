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

  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setClicks({ ...clicks, good: clicks.good + 1 })
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
}

  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setClicks({ ...clicks, bad: clicks.bad + 1})
  }

  const getTotal = () => (allClicks.reduce((a, b) => a + b, 0))
  const sumClicks = () => ( clicks.good + clicks.bad + clicks.neutral )
  const average = () => (sumClicks() / getTotal())
  const conditionalAverage = () => {  
      if (isNaN(average())) {
        return 'is not yet available.'
      } else if (average() === Infinity) {
        return 'is too large or too small to count.'
      } else {
        return average()
      }
  }


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
      <Statistics text='average' value={conditionalAverage()} /> 

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)