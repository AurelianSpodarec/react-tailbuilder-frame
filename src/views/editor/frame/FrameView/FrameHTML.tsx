import { useState, useRef } from 'react';
import Frame from 'react-frame-component';
 
import tailwindcss from '../container/tailwindcss';
import FrameContent from '../FrameContent/FrameContent';
import { getActiveContentHTML } from '../../../../store/features/frameInfo/frameInfoSelectors';

function FrameHTML() {
    const iFrameRef:Ref<HTMLIFrameElement> | undefined = useRef();
    
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});
    const reduxActiveContent = getActiveContentHTML()
    
    console.log("FrameHTML", reduxActiveContent)
    
    if(!frameState.initialContent) return <></>
    return (
        <>
            <Frame
                id="frame"
                ref={iFrameRef}
                initialContent={frameState.initialContent}
                onLoad={event => event.stopPropagation()}
                className="min-h-full bg-white h-full w-full pointer-events-auto"
                loading="lazy"
            >
                <div className="h-full w-full frame-div" dangerouslySetInnerHTML={{__html: reduxActiveContent }} /> 
                <FrameContent />
            </Frame>
        </>
    );
}

export default FrameHTML;
