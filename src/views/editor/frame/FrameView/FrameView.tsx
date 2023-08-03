import React, {  useEffect, useState } from 'react';

import { useFrameInfo } from 'context/FrameInfo';

// import { zoomOptions } from 'src/config';


import * as ContextMenu from '@radix-ui/react-context-menu';
import FrameHTML from './FrameHTML';
import FrameOverlay from './FrameOverlay';
import ContextMenuFrame from 'organisms/ContextMenuFrame';

function FrameView() {
    const { breakpoint, setBreakpointTo }:any = useFrameInfo();

  
    return (
        <main className="js-droppable js-main-frame bg-[#121212] relative h-full w-full overflow-hidden">
        <div className="h-full w-full">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex overflow-hidden flex-row items-center">
    
            <div 
                id="frame-container" 
                className="relative h-full mx-auto w-full" 
                style={{ 
                    "userSelect": "none",  
                    "width": `${breakpoint && breakpoint.width !== 100 ? `${breakpoint.width}px` : '100%'}`
                }}
            >
                <div className="relative min-h-[1px] h-full w-full" style={{"contain": "content" }}>
                    <FrameOverlay />

                    <ContextMenu.Root>
                        <ContextMenu.Trigger className="ContextMenuTrigger">
                            <FrameHTML />
                        </ContextMenu.Trigger>
                        <ContextMenu.Portal>
                            <ContextMenuFrame />
                        </ContextMenu.Portal>
                    </ContextMenu.Root>
                </div>
            </div>

        </div>
        </div>
        </main>
    );
}

export default FrameView;