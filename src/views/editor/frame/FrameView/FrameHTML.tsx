import { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client'

import Frame from 'react-frame-component';
 
import tailwindcss from '../container/tailwindcss';
import FrameContent from '../FrameContent/FrameContent';
import { getActiveContentHTML, getActiveContentJSON } from '../../../../store/features/frameInfo/frameInfoSelectors';
import render from '../../../../utils/vDom/render';

function FrameHTML() {
    const iFrameRef:Ref<HTMLIFrameElement> | undefined = useRef();
    
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});
    const reduxActiveContent = getActiveContentHTML()
    
    if(!frameState.initialContent) return <></>
    // const $app = render(reduxActiveContent);
    // root.render(
    //     <div>
    //         Hi
    //     </div>
    // )
    // return (
    //     <div>
    //         <div className="h-full w-full frame-div" dangerouslySetInnerHTML={{__html: reduxActiveContent }} /> 
    //     </div>
    // );
    // return $app;
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
