import React, {  useEffect, useState } from 'react';
// import { useFrameInfo } from 'context/FrameInfo';
import CreateHighlight from '../_components/highlighting/CreateHighlight';

function FrameOverlay() {
    // const FrameContextAPI:any = useFrameInfo()

    return (
        <div id="outside-container-directly-on-iframe" className="absolute top-0 bottom-0 h-full w-full z-10"  style={{ "userSelect": "none", "pointerEvents": "none" }}>
        <div className="relative h-full">
            {/* <CreateHighlight node={FrameContextAPI.temporaryNodeElement} type="temporary" /> */}
            {/* <CreateHighlight node={FrameContextAPI.temporaryNodeElement} type="placeholder" /> */}
            {/* <CreateHighlight node={FrameContextAPI.selectedNodeElement} type="selected" /> */}
            {/* <CreateHighlight node={FrameContextAPI.selectedSection} type="active-section" /> */}
        </div>
        </div>
    )
}

export default FrameOverlay;