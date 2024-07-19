import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import YouTubeEmbed from '../components/YouTubeEmbed';  // Import the YouTubeEmbed component
import './ProjectDetail.scss';

// Custom plugin to transform <youtube embedId="..."/> into the YouTubeEmbed component
const transformYouTube = () => (tree) => {
    const visit = (node, index, parent) => {
        if (node.type === 'html' && node.value.startsWith('<youtube ')) {
            const embedIdMatch = node.value.match(/embedId="(.+?)"/);
            if (embedIdMatch) {
                const embedId = embedIdMatch[1];
                parent.children.splice(index, 1, {
                    type: 'element',
                    tagName: 'youtube',
                    properties: { embedId },
                    children: []
                });
            }
        }
        if (node.children) {
            node.children.forEach((child, i) => visit(child, i, node));
        }
    };
    visit(tree, 0, null);
};

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
                console.error('Error fetching the markdown file:', error);
                setContent('Failed to load project content.');
            }
        };
        fetchContent();
    }, [name]);

    return (
        <div className="project-detail">
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkParse, remarkGfm, [remarkRehype, { allowDangerousHtml: true }], rehypeRaw, transformYouTube]}
                components={{
                    youtube: ({ embedid }) => <YouTubeEmbed embedId={embedid} />
                }}
            />
        </div>
    );
};

export default ProjectDetail;
