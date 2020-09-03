import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Heading  = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const sumClicks = good + neutral + bad

  if (sumClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const average = () => ((good - bad) / sumClicks).toFixed(2)

  const percentPositive = () => `${Math.floor((good / sumClicks) * 100)} %`

  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={sumClicks} />
        <Statistic text='average' value={average()} /> 
        <Statistic text='positive' value={percentPositive()} /> 
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGoodClick] = useState(0)
  const [neutral, setNeutralClick] = useState(0)
  const [bad, setBadClick] = useState(0)

  const handleGoodClick = () => setGoodClick(good + 1)
  const handleNeutralClick = () => setNeutralClick(neutral + 1)
  const handleBadClick = () => setBadClick(bad + 1)

  return (
    <div>
      <Heading text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Heading text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)