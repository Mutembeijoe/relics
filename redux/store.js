import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

const INITIAL_STATE = {
  name: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

const middlewares = [logger]


const makeStore = context => createStore(reducer, applyMiddleware(...middlewares))

// export an Assembled wrapper
export const wrapper = createWrapper(makeStore, {debug:true})
