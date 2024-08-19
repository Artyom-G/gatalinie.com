import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.scss';

const Projects = () => {
    const [misc, setMisc] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchMisc = async () => {
            const context = require.context('../projects', false, /\.json$/);
            const projectData = await Promise.all(
                context.keys().map(async (file) => {
                    const data = await import(`../projects/${file.replace('./', '')}`);
                    const projectName = file.replace('./', '').replace('.json', '');
                    return { ...data, name: projectName };
                })
            );

            projectData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setMisc(projectData);
        };
        fetchMisc();
        const fetchProjects = async () => {
            const context = require.context('../projects/projects', false, /\.json$/);
            const projectData = await Promise.all(
                context.keys().map(async (file) => {
                    const data = await import(`../projects/projects/${file.replace('./', '')}`);
                    const projectName = file.replace('./', '').replace('.json', '');
                    return { ...data, name: projectName };
                })
            );

            projectData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setProjects(projectData);
        };
        fetchMisc();
        fetchProjects();
    }, []);

    return (
        <div className="projects">
            <div className='projects__projects'>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project}/>
                    </div>
                ))}
            </div>
            <h1>Miscellaneous</h1>
            <div className='projects__projects'>
                {misc.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
