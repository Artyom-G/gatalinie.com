import React from 'react';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import './ImageEmbed.scss';

const imagesContext = require.context('../assets', false, /\.(png|jpe?g|svg)$/);

const ImageEmbed = ({ src, alt="GaTalinie" }) => {

    const [loading, setLoading] = useState(true);
    const [thumbnail, setThumbnail] = useState("https://preview.redd.it/help-this-image-couldnt-be-loaded-error-and-i-need-that-v0-71omzkrcy1la1.png?width=271&format=png&auto=webp&s=fe951e015ceb11f9990a1328ad7332d539c2ad8b");

    useEffect(() => {
        if(src.startsWith("http://") || src.startsWith("https://")){
            setThumbnail(src);
        }
        else{
            setThumbnail(imagesContext(`./${src}`));
        }
        setLoading(false);
    }, []);

    if(loading){
        return (
            <div className='loader'>
                <BounceLoader className="loading-screen__loader" color={"#ffffff"} size={50} />
            </div>
        );
    }

    return (
        <div className="image-embed">
            <img src={thumbnail} alt={alt} />
        </div>
    );
};

export default ImageEmbed;
