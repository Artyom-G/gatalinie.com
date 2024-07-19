import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
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

            projectData.sort((a, b) => new Date(b.date) - new Date(a.date));

            console.log(projectData);
            setProjects(projectData);
        };
        fetchProjects();
    }, []);

    return (
        <div className="projects">
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project}/>
                </div>
            ))}
        </div>
    );
};

export default Projects;
