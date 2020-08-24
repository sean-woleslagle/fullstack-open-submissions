import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <p>
        {props.content}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10 
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const mappedContent = course.parts.map(part => <p>{part.name}</p>)
  const totalExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content content={mappedContent} />
      <Total total={totalExercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))