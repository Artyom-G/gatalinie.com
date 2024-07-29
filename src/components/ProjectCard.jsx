import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProjectCard.scss';

const imagesContext = require.context('../assets', false, /\.(png|jpe?g|svg)$/);

const ProjectCard = ({ project }) => {

    const [thumbnail, setThumbnail] = useState("https://preview.redd.it/help-this-image-couldnt-be-loaded-error-and-i-need-that-v0-71omzkrcy1la1.png?width=271&format=png&auto=webp&s=fe951e015ceb11f9990a1328ad7332d539c2ad8b");

    useEffect(() => {
        if(project.thumbnail.startsWith("http://") || project.thumbnail.startsWith("https://")){
            setThumbnail(project.thumbnail);
        }
        else{
            setThumbnail(imagesContext(`./${project.thumbnail}`));
        }
    }, []);

    return (
        <div className="project-card">
            <Link to={`/projects/${project.name}`}>
                <div className="project-card__image-container">
                    <img src={thumbnail} alt={project.title} className="project-card__image" />
                    <div className="project-card__overlay">
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__description">{project.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
