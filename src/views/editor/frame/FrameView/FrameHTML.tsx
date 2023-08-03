import React, {  useEffect, useState } from 'react';
import Frame from 'react-frame-component';
 
import tailwindcss from '../container/tailwindcss';
import FrameContent from '../FrameContent/FrameContent';

function FrameHTML() {
    const iFrameRef:any = React.useRef();
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});

    const activePageDOM = "<div>Hello</div>"
 
    if(!frameState.initialContent) return <></>
    return (
        <>
            <Frame
                id="frame"
                ref={iFrameRef}
                initialContent={frameState.initialContent}
                onLoad={event => event.stopPropagation()}
                className="min-h-full bg-white h-full w-full"
                style={{ "pointerEvents": "auto" }}
                loading="lazy"
            >
                {/* <div className="h-full w-full frame-div" dangerouslySetInnerHTML={{__html: FrameContextAPI.activePages[FrameContextAPI.activePageIndex].html }} />  */}
                <div className="h-full w-full frame-div" dangerouslySetInnerHTML={{__html: activePageDOM }} /> 
                <FrameContent />
            </Frame>
        </>
    );
}

export default FrameHTML;
