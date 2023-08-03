import React from 'react';
import elements from './elements';
import Frame from 'react-frame-component';
import FrameContent from './FrameContent';
import FrameHTML from './Frame/FrameView/FrameHTML';

function App() {
    console.log(elements)
    const iFrameRef:any = React.useRef();
    return (
        <div>
            <div>


                <div>
                    <h3>
                        Elements    
                    </h3>
                    <div>
                        {elements && elements.map((element:any) => {
                            return (
                                <div key={element.id}>
                                    {element.id}
                                </div>
                            )
                        })}
                    </div>
                </div>


                        <FrameHTML />

            </div>
        </div>
    )
}

export default App
