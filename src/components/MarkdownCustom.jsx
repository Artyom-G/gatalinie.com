import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import YouTubeEmbed from './YouTubeEmbed';
import ImageEmbed from './ImageEmbed';
import './MarkdownCustom.scss';

const transformYouTube = () => (tree) => {
    const visit = (node, index, parent) => {
        if (node.type === 'html' && node.value.startsWith('<youtube ')) {
            const embedIdMatch = node.value.match(/<youtube embedId="(.+?)">/);
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

const transformImageEmbed = () => (tree) => {
    const visit = (node, index, parent) => {
        if (node.type === 'html' && node.value.startsWith('<imageembed ')) {
            const urlMatch = node.value.match(/src="(.+?)"/);
            const altMatch = node.value.match(/alt="(.+?)"/);
            if (urlMatch && altMatch) {
                const src = urlMatch[1];
                const alt = altMatch[1];
                parent.children.splice(index, 1, {
                    type: 'element',
                    tagName: 'imageembed',
                    properties: { src, alt },
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

export const MarkdownCustom = ({ content }) => {
    return (
        <div className='md'>
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkParse, remarkGfm, [remarkRehype, { allowDangerousHtml: true }], rehypeRaw, transformYouTube, transformImageEmbed]}
                components={{
                    youtube: ({ embedid }) => <YouTubeEmbed embedId={embedid} />,
                    imageembed: ({ src, alt }) => <ImageEmbed src={src} alt={alt} />
                }}
            />
        </div>
    );
};
