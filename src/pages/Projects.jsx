import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const context = require.context('../projects', false, /\.json$/);
            const projectData = await Promise.all(
                context.keys().map(async (file) => {
                    const data = await import(`../projects/${file.replace('./', '')}`);
                    const projectName = file.replace('./', '').replace('.json', '');
                    return { ...data, name: projectName };
                })
            );
            console.log(projectData);
            setProjects(projectData);
        };
        fetchProjects();
    }, []);

    return (
        <div className="projects">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <Link to={`/projects/${project.name}`}>
                        <img src={project.bannerImage} alt={project.title} className="project-card__image" />
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__description">{project.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Projects;
