import { configureStore } from "@reduxjs/toolkit";

import frameInfoSlice from "./features/frameInfo/frameInfoSlice";

const store = configureStore({
    reducer: {
        frameInfo: frameInfoSlice,
    }
});

export default store;
