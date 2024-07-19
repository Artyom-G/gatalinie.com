import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <Link to={`/projects/${project.name}`}>
                <div className="project-card__image-container">
                    <img src={project.thumbnail} alt={project.title} className="project-card__image" />
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
