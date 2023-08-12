import { useState, useRef } from 'react';
import Frame from 'react-frame-component';
 
import tailwindcss from '../container/tailwindcss';
import FrameContent from '../FrameContent/FrameContent';
import Converter from '../../../../utils/converter';
import { getActiveContent } from '../../../../store/features/frameInfo/frameInfoSelectors';

function FrameHTML() {
    const iFrameRef:Ref<HTMLIFrameElement> | undefined = useRef();
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});

    const reduxActiveContent = getActiveContent()
    // const htmlConverter = new Converter(reduxActiveContent)
    // const pageJSON = htmlConverter.htmlToJson()
    // console.log("HTMl to JSON", pageJSON)
    
    const jsonConverter = new Converter(reduxActiveContent)
    const convertedJson = jsonConverter.jsonToHtml()

    // console.log("JSON to HTML", convertedJson)
    // console.log("Check HTML", HTMLcanvas === convertedJson)

    const activePageDOM = convertedJson // translate from JSON from database
    // const activePageDOM = "<div>hi</div>"
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
                <div className="h-full w-full frame-div" dangerouslySetInnerHTML={{__html: activePageDOM }} /> 
                <FrameContent />
            </Frame>
        </>
    );
}

export default FrameHTML;
