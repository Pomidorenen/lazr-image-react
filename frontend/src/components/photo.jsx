import React from 'react';
import {useInView} from "react-intersection-observer";
import Loading from "./loading.";

const Photo = ({src,title}) => {
    const {ref,inView}= useInView({
        threshold:0.25,
        triggerOnce:true
    });
    return (
        <div ref={ref} className="photo-wrapper">
            {(inView)?<img  className="img" src={src} alt=""/>:<Loading/>}
            <h1>{title}</h1>
        </div>
    );
};

export default Photo;