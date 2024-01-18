import React, { useState } from 'react'
import "./Quiz.scss"
import { GoLightBulb } from "react-icons/go";
import { FaVolumeUp } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { FaExpand } from "react-icons/fa6";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const Quiz = () => {
    const [activetab, setActiveTab] = useState(1)
    const [currentQustion, setCurrentQustion] = useState(0)
    const qustions = [
        "10*30+60-10",
        "30*10+90-15",
        "15*50+100-15",
        "20*40+80-20",
        "9*60+120-9",
        "8*70+140-8",
        "7*80+160-7",
        "3*120+240-3",
        "2*130+260-2",
        "5*100+200-5",
    ]

    const changeQustion = (param) => {

        if (param == "next" && currentQustion < qustions.length - 1) {
            setCurrentQustion(currentQustion + 1)
        }
        if (param == "prev" && currentQustion > 0) {
            setCurrentQustion(currentQustion - 1)
        }


    }

    return (
        <div className='quiz-container'>
            <div className="quiz-content">
                <div className="tabs">
                    <span className={activetab == 1 && 'active-tab'} onClick={() => setActiveTab(1)}>Study</span>
                    <span className={activetab == 2 && 'active-tab'} onClick={() => setActiveTab(2)}>Quiz</span>
                    <span className={activetab == 3 && 'active-tab'} onClick={() => setActiveTab(3)}>Test</span>
                    <span className={activetab == 4 && 'active-tab'} onClick={() => setActiveTab(4)}>Game</span>
                    <span className={activetab == 5 && 'active-tab'} onClick={() => setActiveTab(5)}>Other</span>
                </div>

                <div className="board">
                    <div className="icons">
                        <GoLightBulb />
                        <FaVolumeUp />
                    </div>
                    <div className="qustion">
                        {qustions[currentQustion]}
                    </div>
                </div>

                <div className="navigations">
                    <div><IoMdRefresh /></div>
                    <div className='middle'>
                        <FaChevronCircleLeft onClick={() => changeQustion("prev")} />
                        <span>01/10</span>
                        <FaChevronCircleRight onClick={() => changeQustion("next")} />
                    </div>
                    <div><FaExpand /></div>
                </div>


            </div>
        </div>
    )
}

export default Quiz
