import FrameHTML from "./FrameHTML";
import FrameOverlay from "./FrameOverlay";

function FrameView() {
    return (
        <div className="h-full relative">
            {/* Header */}
            <FrameOverlay />
            <FrameHTML />
            {/* Footer */}
        </div>
    )
}

export default FrameView;
