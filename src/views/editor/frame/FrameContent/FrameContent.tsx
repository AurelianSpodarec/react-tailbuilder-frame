import React, { useContext, useEffect, useState } from 'react'; 
import { useFrame } from 'react-frame-component';


/////////////////////////////////////////////////
// MOUSE EVENT FUNCTIONS
/////////////////////////////////////////////////
const FrameContent = (props:any) => {
    const { document: frameDocument, window: frameWindow }:FrameContextProps = useFrame();

    // useEffect(() => {
    //     const timestamp = new Date().getTime();     
    //     if(frameDocument) {
    //         const newStyles = frameDocument.createElement('script');
    //         newStyles.src = `https://cdn.tailwindcss.com?timestamp=${timestamp}`;
    //         frameDocument?.head.appendChild(newStyles);
    //     }
    
    //     const newScript = frameDocument?.createElement('script');
    //     if(newScript) {
    //         newScript.innerHTML = `
    //             tailwind.config = {
    //                 content: [
    //                     "./src/**/*.{js,jsx,ts,tsx}",
    //                 ],
    //                 theme: {
    //                     extend: ${JSON.stringify(currentTokens)}
    //                 },
    //                 plugins: [],
    //             };
    //         `;
    //         frameDocument?.body.appendChild(newScript);
    //     }
    // }, [currentTokens])

  
    return null;
};

export default FrameContent;

interface FrameContextProps {
    document?: Document | undefined;
    window?: Window | undefined;
}
