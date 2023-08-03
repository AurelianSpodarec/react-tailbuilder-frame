import react, { useEffect, useState } from 'react';

import HighlightActiveSection from "./HighlightActiveSection";

function CreateHighlight({node, type}:any) {

    const components:any = {
        'active-section': {
            "classes": "border-2 border-solid border-skin-accent-500",
        },
        'selected': {
            "classes": "border-2 border-solid border-green-700/80",
        },
        'temporary': {
            "classes": "border-2 border-dashed border-blue-600",
        },
        'placeholder': {
            "classes": "border-2 border-dashed border-blue-600",
        },
    }

   return (
        <div 
            // className={`absolute z-10 ${components[type].classes}`} 
            // style={{ 
            //     "width": `${element.width}px`,  
            //     "height": `${element.height}px`, 
            //     "transform": ` translateY(${element.top - scrollOffset }px)`, "left": `${element.left}px`, "right": `${element.right}px` 
            // }}
        >
            <div className="relative h-full w-full">
 
 
              

            </div>
        </div>
    )
}

export default CreateHighlight;