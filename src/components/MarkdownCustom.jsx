import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import YouTubeEmbed from './YouTubeEmbed';  
import './MarkdownCustom.scss';

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

export const MarkdownCustom = ({ content }) => {
    
    return ( 
        <div className='md'>
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkParse, remarkGfm, [remarkRehype, { allowDangerousHtml: true }], rehypeRaw, transformYouTube]}
                components={{
                    youtube: ({ embedid }) => <YouTubeEmbed embedId={embedid} />
                }}
            />
        </div>
    );
}