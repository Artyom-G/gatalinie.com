import React, { useEffect, useState } from 'react';
import { MarkdownCustom } from '../components/MarkdownCustom';
import './Services.scss';

export const Services = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const mdFile = await import(`./Services.md`);
                const response = await fetch(mdFile.default);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error fetching the markdown file:', error);
                setContent('Failed to load project content.');
            }
        };
        fetchContent();
    }, []);
    
    return (
        <div className='services'>
            <MarkdownCustom content={content}/>
        </div>        
    );
}