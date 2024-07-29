import React from 'react'; 
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import YouTubeEmbed from './YouTubeEmbed';
import ImageEmbed from './ImageEmbed';
import './MarkdownCustom.scss'; 

const Post = ({ content }) => {
    return (
        <div className='md'>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    youtube: ({ embedid }) => <YouTubeEmbed embedId={embedid} />,
                    picture: ({ src, alt }) => <ImageEmbed src={src} alt={alt} />
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};
export default Post;