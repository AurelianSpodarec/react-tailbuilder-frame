import React, { useEffect, useState } from 'react'; 
import { useFrame } from 'react-frame-component';
import { getActiveContent } from '../../../../store/features/frameInfo/frameInfoSelectors';

function findParentObjectWithValue(obj, targetValue, parent = null, parentKey = null) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const result = findParentObjectWithValue(obj[key], targetValue, obj, key);
            if (result !== undefined) {
                return result;
            }
        } else if (obj[key] === targetValue) {
            return parent;
        }
    }
}


const FrameContent = () => {
    const { document: frameDocument, window: frameWindow }:FrameContextProps = useFrame();

    const reduxActiveContent = getActiveContent()

    function handleSetSelectedElement(event: MouseEvent | null) {
        if(event) {
            const uuid = (event.target as HTMLElement).getAttribute('data-uuid');
            console.log(uuid)

            
            const a = findParentObjectWithValue(reduxActiveContent, uuid)
            console.log(a)

        }
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
