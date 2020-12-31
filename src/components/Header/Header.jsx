import React from 'react'
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <h1 className="header__container__title">
                        React Countries
                    <FaGlobe className="icon" />
                    </h1>
                </Link>
                <div className="header__container__theme-switch">
                    <FaMoon />
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <FaSun />
                </div>
            </div>
        </header>
    )
}

export default Header
