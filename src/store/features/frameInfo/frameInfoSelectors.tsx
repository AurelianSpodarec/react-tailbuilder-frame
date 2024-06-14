import { useSelector } from "react-redux";
import { IFrameInfoState } from "./IFrameInfoState";
import Converter from "../../../utils/converter";

// Read
// =====================================================================
export const getActiveContentHTML = () => useSelector((state: { content: IFrameInfoState }) => {
    const activeContent = state.frameInfo.content;

    const jsonConverter = new Converter(activeContent)
    const convertedJson = jsonConverter.jsonToHtml()
    
    return convertedJson;
})

export const getActiveContentJSON = () => useSelector((state: { content: IFrameInfoState }) => {
    const activeContent = state.frameInfo.content;
    return activeContent;
})
