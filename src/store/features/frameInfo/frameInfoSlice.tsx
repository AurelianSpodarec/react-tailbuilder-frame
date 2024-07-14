import { createSlice } from "@reduxjs/toolkit";
import dataProjects from "../../../database/dataProjects";
import { IFrameInfoState } from "./IFrameInfoState";
import helperJSON from "../../../utils/helperJSON";

const initialState: IFrameInfoState = {
  content: []//dataProjects[0].content
}


function findAndUpdateObject(objects, payload) {
  const objectID = payload.attributes['data-uuid'];

  return objects.map(obj => {
    if (obj.attributes && obj.attributes['data-uuid'] === objectID) {
      return {
        ...payload,
        children: obj.children,
      };
    } else if (obj.children) {
      const updatedChildren = findAndUpdateObject(obj.children, objectID);
      return {
        ...obj,
        children: updatedChildren
      };
    } else {
      return obj;
    }
  });
};

const frameInfoSlice = createSlice({
  name: "frameInfo",
  initialState,
  reducers: {
    setContent: (state) => {
      state.content = dataProjects[0].content
    },
    setSelectElement: (state, payload) => {
      // Selected element should highlight with react bound 
    },
    updateJsonObject: (state, { payload }) => {
      // console.log(state, payload)
      const objectID = payload.attributes['data-uuid'];

      const findAndUpdateObject = (objects) => {
        return objects.map(obj => {
          if (obj.attributes && obj.attributes['data-uuid'] === objectID) {
            return {
              ...payload,
              children: obj.children,
            };
          } else if (obj.children) {
            const updatedChildren = findAndUpdateObject(obj.children);
            return {
              ...obj,
              children: updatedChildren
            };
          } else {
            return obj;
          }
        });
      };

      const updatedContent = findAndUpdateObject(state.content);

      return {
        ...state,
        content: updatedContent
      };
    },
    updateJSONClass: (state, { payload }) => {
      const objectID = payload.attributes['data-uuid'];

      const findAndUpdateObject = (objects) => {
        return objects.map(obj => {
          if (obj.attributes && obj.attributes['data-uuid'] === objectID) {
            const updatedAttributes = {
              ...obj.attributes,
              class: payload.attributes.class
            };
            return { ...obj, attributes: updatedAttributes };
          } else if (obj.children) {
            const updatedChildren = findAndUpdateObject(obj.children);
            return { ...obj, children: updatedChildren };
          } else {
            return obj;
          }
        });
      };

      const updatedContent = findAndUpdateObject(state.content);

      return {
        ...state,
        content: updatedContent
      };
    }

  },
});

export const { setSelectElement, updateJSONClass, setContent, updateJsonObject } = frameInfoSlice.actions;
export default frameInfoSlice.reducer;
