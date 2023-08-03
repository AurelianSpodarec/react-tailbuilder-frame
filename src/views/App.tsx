import React from 'react';
import elements from '../config/elements';
import FrameHTML from './editor/frame/FrameView/FrameHTML';

function App() {
    return (
        <div>
            <div className="flex">

                <aside className="p-4">
                    <div>
                        <h3 className="font-bold text-xl">Elements</h3>
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
                </aside>

                <main className="border-4 border-red-500 w-full">
                    <FrameHTML />
                </main>

                <aside>
                    Properties
                </aside>

            </div>
        </div>
    )
}

export default App
