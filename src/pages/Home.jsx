import React, { useEffect } from 'react';
import './Home.scss';
import BottomBar from '../components/BottomBar';
import avatar from '../assets/avatar.png';
import hands1 from '../assets/hands1.png';
import hands2 from '../assets/hands2.png';
import hands3 from '../assets/hands3.png';

export const Home = () => {

    useEffect(() => {
        const particleContainer = document.querySelector('.particle-container');

        for (let i = 0; i < 20; i++) { // Adjust the number of particles
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Randomize size and position
            const size = Math.random() * 100 + 50; // Size between 50px and 150px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.3), ${getRandomDarkColor()})`;

            particleContainer.appendChild(particle);
        }
    }, []);

    const getRandomDarkColor = () => {
        const colors = [
            'rgba(139, 0, 139, 0.6)', // Dark Magenta
            'rgba(153, 50, 204, 0.6)', // Dark Orchid
            'rgba(128, 0, 128, 0.6)', // Purple
            'rgba(139, 0, 0, 0.6)' // Dark Red
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

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

    return (  
        <div className='home'>
            <div className='particle-container'></div>
            <BottomBar/>
            <div className='home__main'>
                <img src={avatar} alt="Avatar" className="home__avatar" />
                <img src={hands1} alt="Gatalinie Hands1" className="home__hands home__hands1" />
                <img src={hands2} alt="Gatalinie Hands2" className="home__hands home__hands2" />
                <img src={hands3} alt="Gatalinie Hands3" className="home__hands home__hands3" />
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
