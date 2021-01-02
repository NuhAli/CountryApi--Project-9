import React from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa'
import './Header.scss'

const Header = (props) => {

    return (
        <header className={`header ${props.theme}`}>
            <div className="header__container">
                <Link
                    to="/" 
                    onClick={props.restart}
                >
                    <h1 className="header__container__title">
                        <span className="header__container__title-span">
                        React Countries
                        </span>
                        <FaGlobe className={`icon ${props.theme}`} />
                    </h1>
                </Link>
                <div className="header__container__theme-switch">
                    <FaMoon />
                    <label className="switch">
                        <input 
                            type="checkbox"
                            onChange={props.changeTheme}
                        />
                        <span className="slider round"></span>
                    </label>
                    <FaSun />
                </div>
            </div>
        </header>
    )
}

export default Header
