import React from 'react'
import "./Others.scss";
import { IoIosAddCircle } from "react-icons/io";
import logobg from "../../assets/logobg.png"
const Others = () => {
    return (
        <div className='others'>
            <div>
                <div className="logobg">
                    <img src={logobg} alt="" />
                    <div>
                        <small>published by</small>
                        <h2>Hygge <span>X</span></h2>
                    </div>
                </div>
            </div>
            <h2>
                <IoIosAddCircle />
                Create FlashCard
            </h2>
        </div>
    )
}

export default Others
