import { defineState } from "redux-localstore";

const defaultState = {
  definitionsState: {
    title: "The Legend of Zelda",
    info: "The Legend of Zelda is an action-adventure video game developed by Nintendo.",
    buttonText: "Get Yours",
    effect3D: true,
    file: [],
    alert: false,
  },
};

const initialState = defineState(defaultState)("definitions");

const definitions = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_DEFINITIONS":
      return {
        ...state,
        definitionsState: {
          ...defaultState.definitionsState,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default definitions;
