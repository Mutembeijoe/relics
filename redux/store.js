import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middlewares) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HYDRATE":
      const nextState = {
        ...state, //use previous state
        ...action.payload, //apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    default:
      return rootReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([logger]));
};

export const wrapper = createWrapper(initStore);
