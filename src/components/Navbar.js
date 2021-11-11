import React from 'react'
import '../assets/styles/Navbar.css'
import logo from '../assets/images/library-logo.png'

export const Navbar = () => {
    return (
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} className="logo" alt=""  />
                    <h1 className="website-title">
                        PSEU Library System
                    </h1>
                </div>
                <button className="login-button">
                    Login
                </button>
            </nav>
    )
}
