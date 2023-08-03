import FrameHTML from "../frame/FrameView/FrameHTML";
import FrameView from "../frame/FrameView/FrameView";

function WorkspaceView() {
    return (
        <div className="h-full">
            <FrameView />
        </div>
    )
}

export default WorkspaceView;


// Click element inside iFrame and get the node (e.target)
// - Store the node inside Context API (FrameInfo)

// In React App, take the node and look up its X and Y cordinates and offset it to the page
// - To create a highlight, take the node getBoundingClientRect and update width/height of the border highlighter
