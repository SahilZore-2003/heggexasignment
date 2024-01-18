import React from 'react'
import "./Main.scss"
import Quiz from '../quiz/Quiz'
import Others from '../others/Others'
const Main = () => {
  return (
    <main>
      <h1 className="heading">
         Relations & Functions (Mathematics)
      </h1>
      <Quiz />
      <Others />
    </main>
  )
}

export default Main
