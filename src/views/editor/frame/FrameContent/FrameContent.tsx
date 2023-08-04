import React, { useEffect, useState } from 'react'; 
import { useFrame } from 'react-frame-component';


// Get the UUID and find the object inside JSON
// Store selected UUID in Redux 
// Highlight the element on the page
// Find and update using the UUID in JSON - this should automatically update the HTML using some sort of algorithm
// Find a way to update the HTML in chunks, React uses "diffing algorithm"

const FrameContent = () => {
    const { document: frameDocument, window: frameWindow }:FrameContextProps = useFrame();

    function handleSetSelectedElement(event: MouseEvent | null) {
        console.log(event)
        if(event) {
            const uuid = (event.target as HTMLElement).getAttribute('data-uuid');
            console.log(uuid)
        }
    }
    // console.log(event.target.getBoundingClientRect())

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
