import React from 'react'
import "./MobileLink.scss"
const MobileLink = ({check}) => {
    return (
        <div className='mobile-link' style={check ? { height: "50vh" } : { height: "0px" }}>
            <a href="#">Home</a>
            <a href="#">FlashCard</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default MobileLink
