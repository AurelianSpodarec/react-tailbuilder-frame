import { createSlice } from "@reduxjs/toolkit";
import dataProjects from "../../../database/dataProjects";
import { IFrameInfoState } from "./IFrameInfoState";
import helperJSON from "../../../utils/helperJSON";

const initialState: IFrameInfoState = {
    content: dataProjects[0].content
}

const frameInfoSlice = createSlice({
    name: "frameInfo",
    initialState,
    reducers: {
        setSelectElement: (state, payload) => {
            // Selected element should highlight with react bound 
        },
        updateJSONClass: (state, {payload}) => {
            const objectID = payload.attributes['data-uuid'];
            const updatedObject = payload;
        
            const updatedContent = state.content.map(obj => {
                if (obj.attributes['data-uuid'] === objectID) {
                    return { ...obj, ...updatedObject };
                } else {
                    return obj;
                }
            });
        
            state.content = updatedContent;
        }
    },
});

export const { setSelectElement, updateJSONClass } = frameInfoSlice.actions;
export default frameInfoSlice.reducer;
