import React, { useState } from 'react'
import "./Navbar.scss";
import MobileLink from "../Mobilelinks/MobileLink";
import logo from "../../assets/logo.jpeg"
const Navbar = () => {
    const [check, setCheck] = useState(false)
    return (
        <>

            <nav className='nav-container'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">FlashCard</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <button>Login</button>
                    <div className="hamburger">
                        <input class="checkbox" type="checkbox" checked={check} name="" id="" />
                        <div class="hamburger-lines" onClick={() => setCheck(!check)}>
                            <span class="line line1"></span>
                            <span class="line line2"></span>
                            <span class="line line3"></span>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileLink check={check} />
        </>
    )
}

export default Navbar
