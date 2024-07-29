import React from 'react';
import './ImageEmbed.scss';

const ImageEmbed = ({ src, alt }) => {
    let imageSrc = src;

    if (src.startsWith('./') || src.startsWith('/')  || src.startsWith('../')) {
        try {
            imageSrc = require(`${src}`).default;
        } catch (err) {
            console.error(`Error loading image: ${src}`, err);
        }
    }

    console.log(src);

    return (
        <div className="image-embed">
            <img src={require(`${src}`)} alt={alt} />
        </div>
    );
};

export default ImageEmbed;
