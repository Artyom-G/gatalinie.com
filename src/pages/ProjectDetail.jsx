import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownCustom } from '../components/MarkdownCustom';
import { SocialsButtons } from '../components/SocialsButtons';
import './ProjectDetail.scss';

const ProjectDetail = () => {
    const { name } = useParams();
    const [content, setContent] = useState('');

    const footer = '# Contact:\n\nPhone: 519-722-5499\n\nAddress: 108 Ahrens St W, Unit 2B, Kitchener ON N2H 4C3';

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
            <SocialsButtons></SocialsButtons>
            <MarkdownCustom content={content + footer}/>
        </div>
    );
};

export default ProjectDetail;
