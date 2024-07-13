import React, { useEffect } from 'react';
import './Home.scss';
import BottomBar from '../components/BottomBar';
import avatar from '../assets/avatar.png'; // Ensure the path is correct

export const Home = () => {

    useEffect(() => {
        const circles = document.querySelectorAll('.home__circles__base');
        circles.forEach(circle => {
            circle.animate(
                [
                    { transform: 'scale(1)', opacity: 0.9 },
                    { transform: 'scale(1.02)', opacity: 0.82 },
                    { transform: 'scale(1.03)', opacity: 0.8 },
                    { transform: 'scale(1.02)', opacity: 0.82 },
                    { transform: 'scale(1)', opacity: 0.9 }
                ],
                {
                    duration: 6000,
                    iterations: Infinity
                }
            );
        });
    }, []);

    return (  
        <div className='home'>
            <BottomBar/>
            <div className='home__main'>
                <img src={avatar} alt="Avatar" className="home__avatar" />
            </div>
            <div className='home__circles'>
                <span className="home__circles__base home__circles__1"></span>
                <span className="home__circles__base home__circles__2"></span>
                <span className="home__circles__base home__circles__3"></span>
                <span className="home__circles__base home__circles__4"></span>
                <span className="home__circles__base home__circles__5"></span>
            </div>
        </div>
    );
}
