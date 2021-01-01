import React from 'react'
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" onClick={props.restart}>
                    <h1 className="header__container__title">
                        React Countries
                    <FaGlobe className="icon" />
                    </h1>
                </Link>
                <div className="header__container__theme-switch">
                    <FaMoon />
                    <label className="switch">
                        <input type="checkbox" onChange={props.changeTheme} />
                        <span className="slider round"></span>
                    </label>
                    <FaSun />
                </div>
            </div>
        </header>
    )
}

export default Header
