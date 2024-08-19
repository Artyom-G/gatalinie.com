import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownCustom } from '../components/MarkdownCustom';
import './ProjectDetail.scss';

const ProjectDetail = () => {
    const { name } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const mdFile = await import(`../projects/${name}.md`);
                const response = await fetch(mdFile.default);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                try {
                    const mdFile = await import(`../projects/projects/${name}.md`);
                    const response = await fetch(mdFile.default);
                    const text = await response.text();
                    setContent(text);
                } catch (error) {
                    console.error('Error fetching the markdown file:', error);
                    setContent('Failed to load project content.');
                }
            }
        };
        fetchContent();
    }, [name]);

    return (
        <div className="project-detail">
            <MarkdownCustom content={content}/>
        </div>
    );
};

export default ProjectDetail;
