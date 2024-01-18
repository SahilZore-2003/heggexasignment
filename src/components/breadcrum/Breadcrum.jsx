import React from 'react'
import "./Breadcrum.scss"
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";

const Breadcrum = () => {

  return (
    <section className='breadcrum'>
        <IoHomeOutline /> <FaChevronRight /><span>FashCard</span>
        <FaChevronRight /><span>MathMatics</span>
        <FaChevronRight /><span className='last'>Relation & Function</span>
    </section>
  )
}

export default Breadcrum
