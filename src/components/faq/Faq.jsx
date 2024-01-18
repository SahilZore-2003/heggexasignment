import React, { useState } from 'react'
import "./Faq.scss"
import { FaAngleDown } from "react-icons/fa";
const Faq = () => {

  const [expand, setExpand] = useState(null)

  const toggle = i =>{
    console.log(i)
     if(expand==i){
      return setExpand(null)
     }
     setExpand(i)
  }

  const qustions = [
    {
      qustion: "What is Function?",
      answer: "A function f is a rule that assigns to each element x in a domain set D to exactly one unique element, called f(x) in a co-domain set E. The f(x) is called the image of x, while x is the pre-image of f(x).",
      id: 1
    },
    {
      qustion: "What are examples of function relation in math?",
      answer: "Functions: A function is defined as a rule that relates every element of the domain to every element of the range. Here, the domain and range both are sets. For example, y = x+2 and y = 2x – 1 are functions as every input x gives an output y.",
      id: 2
    },
    {
      qustion: "How do you find the relation a function?",
      answer: "To identify a function from a relation, check to see if any of the x values are repeated - if not, it is a function. If any x values are repeated, and the corresponding y values are different, then we have a relation and not a function.",
      id: 3
    },
  ]

  return (
    <div className='faq'>
      <h1>FAQ</h1>

      <div className="qustion-container">
        {
          qustions.map((e,i) => (
            <div className="qustion" key={e.id}>
              <div className="top" onClick={()=>toggle(i)}>
                <h3>{e.qustion} </h3>
                <FaAngleDown />
              </div>
              <p className={expand==i?"show":"answer"}>{e.answer}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Faq
