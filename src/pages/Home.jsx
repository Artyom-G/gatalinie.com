import React, { useEffect, useState } from 'react';
import './Home.scss';
import BottomBar from '../components/BottomBar';
import avatar from '../assets/avatar.png';
import hands1 from '../assets/hands1.png';
import hands2 from '../assets/hands2.png';
import hands3 from '../assets/hands3.png';
import EmailJs from '../components/EmailJs';

export const Home = () => {

    const [state, setState] = useState('GaTalinie');

    useEffect(() => {
        const circles = document.querySelectorAll('.home__circles__base');
        circles.forEach(circle => {
            circle.animate(
                [
                    { transform: 'scale(1)', opacity: 0.9 },
                    { transform: 'scale(1.03)', opacity: 0.82 },
                    { transform: 'scale(1.04)', opacity: 0.8 },
                    { transform: 'scale(1.03)', opacity: 0.82 },
                    { transform: 'scale(1)', opacity: 0.9 }
                ],
                {
                    duration: 6000,
                    iterations: Infinity
                }
            );
        });
    }, []);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (  
        <div className='home'>
            <BottomBar setState={(_state) => setState(_state)}/>
            <div className={`home__main ${state==="GaTalinie" ? 'home__active' : 'home__deactive'}`}>
                <img src={avatar} alt="Avatar" className="home__main__avatar" />
                <img src={hands1} alt="Gatalinie Hands1" className="home__main__hands home__main__hands1" />
                <img src={hands2} alt="Gatalinie Hands2" className="home__main__hands home__main__hands2" />
                <img src={hands3} alt="Gatalinie Hands3" className="home__main__hands home__main__hands3" />
            </div>
            <div className={`home__circles ${state==="GaTalinie" ? 'home__active-circles' : 'home__deactive-circles'}`}>
                <span className="home__circles__base home__circles__1">
                    <div className={`home__contact ${state==="Contact" ? 'home__active-form' : 'home__deactive-form'}`}>
                        <EmailJs/>
                    </div>
                </span>
                <span className="home__circles__base home__circles__2"></span>
                <span className="home__circles__base home__circles__3"></span>
                <span className="home__circles__base home__circles__4"></span>
                <span className="home__circles__base home__circles__5"></span>
            </div>
        </div>
    );
}
