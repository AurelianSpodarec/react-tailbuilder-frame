import { useSelector } from "react-redux";
import { IFrameInfoState } from "./IFrameInfoState";
import Converter from "../../../utils/converter";

// Read
// =====================================================================
export const getActiveContentHTML = () => useSelector((state: { content: IFrameInfoState }) => {
    const activeContent = state.frameInfo.content;

    // OLD STATE
    const jsonConverter = new Converter(activeContent)
    const convertedJson = jsonConverter.jsonToHtml()

    console.log("getActiveContentHTML", convertedJson)
    console.log("state.frameInfo.content", activeContent)
    
    return convertedJson;
})

export const getActiveContentJSON = () => useSelector((state: { content: IFrameInfoState }) => {
    const activeContent = state.frameInfo.content;
    return activeContent;
})
