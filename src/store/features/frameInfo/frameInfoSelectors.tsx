import { useSelector } from "react-redux";
import { IFrameInfoState } from "./IFrameInfoState";

export const getActiveContent = () => useSelector((state: { content: IFrameInfoState }) => {
    const activeContent = state.frameInfo.content;
    return activeContent;
})
