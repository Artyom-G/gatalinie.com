import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
    );
};

export default ProjectCard;
