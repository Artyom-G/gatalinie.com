import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { useNavigate, useLocation } from "react-router-dom";
import './NavBar.scss';

const data = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Services',
        to: '/services'
    },
    {
        label: 'Projects',
        to: '/projects'
    }

]

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }


    const handleNavingateToPage = (link) => {
        navigate(link);
    }

    return (
        <nav className="navbar">
            <ul className={`navbar__menu ${toggleIcon ? 'active' : ""} `} >
                {
                    data.map((item, key) => (
                        <li key={key} className="navbar__menu__link">
                            <button className={location.pathname === item.to ? 'active' : ''} onClick={() => handleNavingateToPage(item.to)}>
                                <span className="navbar__menu__link__span">
                                    {item.label}
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="nav-icon" onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }
            </div>
        </nav>
    )
}

export default NavBar;