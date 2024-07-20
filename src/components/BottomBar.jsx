import React, { useState } from "react";
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
    const [location, setLocation] = useState(data[0].label);
    
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }
    
    return (
        <nav className="bottombar">
            <ul className={`bottombar__menu ${toggleIcon ? 'active' : ""} `} >
                {
                    data.map((item, key) => (
                        <li key={key} className="bottombar__menu__link">
                            <button className={location === item.label ? 'active' : ''} onClick={() => setLocation(item.label)}>
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