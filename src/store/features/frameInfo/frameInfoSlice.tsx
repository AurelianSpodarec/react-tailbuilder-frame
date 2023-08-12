import { createSlice } from "@reduxjs/toolkit";
import dataProjects from "../../../database/dataProjects";
import { IFrameInfoState } from "./IFrameInfoState";

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
    },
});

export const { setSelectElement } = frameInfoSlice.actions;
export default frameInfoSlice.reducer;
