import React, { useEffect } from 'react';
import elements from '../config/elements';
import FrameHTML from './editor/frame/FrameView/FrameHTML';
import WorkspaceView from './editor/workspace/WorkspaceView';
import { useDispatch } from 'react-redux';
import { getActiveContentJSON } from '../store/features/frameInfo/frameInfoSelectors';
import { setContent } from '../store/features/frameInfo/frameInfoSlice';


function App() {
    const activeContent = getActiveContentJSON()
    console.log("activeContent", activeContent)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setContent())
    }, [])
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="flex h-full">

                {/* <aside className="p-4 overflow-auto">
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
                </aside> */}

                <main className="border-4 border-red-500 w-full
                
                flex grow flex-col overflow-hidden relative h-full">
                    <div className="flex flex-col grow">
                        <div className="flex flex-col grow h-full">
                            <WorkspaceView />
                        </div>
                    </div>
                </main>

                <aside>
                    Properties
                    {/* When you click show componentn here */}
                </aside>

            </div>
        </div>
    )
}

export default App
