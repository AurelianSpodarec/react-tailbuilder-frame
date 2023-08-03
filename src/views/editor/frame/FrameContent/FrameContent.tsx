import React, { useContext, useEffect, useState } from 'react'; 
import { useFrame } from 'react-frame-component';

const FrameContent = (props:any) => {
    const { document: frameDocument, window: frameWindow }:FrameContextProps = useFrame();

    function handleSetSelectedElement(event) {
        console.log("hello", event.target)
        console.log(event.target.getBoundingClientRect())
    }

    function onLoad() {
        if(!frameDocument) return;

        frameDocument.addEventListener("click", handleSetSelectedElement);
        return () => {
            frameDocument.removeEventListener("click", handleSetSelectedElement);
        }
    }

    useEffect(() => {
        onLoad()
    }, [])

};

export default FrameContent;

interface FrameContextProps {
    document?: Document | undefined;
    window?: Window | undefined;
}
