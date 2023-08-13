import React, { useEffect, useState } from 'react'; 
import { useFrame } from 'react-frame-component';

import { getActiveContentJSON } from '../../../../store/features/frameInfo/frameInfoSelectors';
import { updateJSONClass, updateJsonObject } from '../../../../store/features/frameInfo/frameInfoSlice';

import helperJSON from '../../../../utils/helperJSON';
import { useDispatch } from 'react-redux';

const FrameContent = () => {
    const { document: frameDocument, window: frameWindow }:FrameContextProps = useFrame();
    const dispatch = useDispatch()
    const reduxActiveContent = getActiveContentJSON()
    
    function handleSetSelectedElement(event: MouseEvent | null) {
        if(event) {
            console.log({reduxActiveContent})
            const uuid = (event.target as HTMLElement).getAttribute('data-uuid');
            const object = helperJSON.findParentObjectWithValue(reduxActiveContent, uuid)
            
            // UPDATE CLASS
            console.log("frame content", object)
            let classArray = object.attributes.class.split(" ")
            classArray.push("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ bg-red-500 text-5xl font-bold border-2 border-green-500")
            const updatedClassString = classArray.join(" ")

            const updatedObject = {
                ...object,
                attributes: {
                    ...object.attributes,
                    class: updatedClassString
                }
            }


            // UPDATE TAG
            // const updatedObject = {
            //     ...object,
            //     tag: "h1",
            //     attributes: {
            //         ...object.attributes,
            //     }
            // }
            console.log({updatedObject})
            dispatch(updateJsonObject(updatedObject))
        
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
