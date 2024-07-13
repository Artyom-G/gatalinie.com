import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './BottomBar.scss';

const data = [
    {
        label: 'GaTalinie',
    },
    {
        label: 'Contact',
    }

]

const BottomBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);
    const [location, setLocation] = useState('GaTalinie');

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <nav className="bottombar">
            <ul className={`bottombar__menu ${toggleIcon ? 'active' : ""} `} >
                {
                    data.map((item, key) => (
                        <li key={key} className="bottombar__menu__link">
                            <button className={location === item.label ? 'active' : ''}>
                                <span className="bottombar__menu__link__span">
                                    {item.label}
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default BottomBar;