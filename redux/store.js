import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const initStore = ({ isServer }) => {
  //If it's on server side, create a store simply
  if (isServer) {
    return createStore(reducer, bindMiddleware([logger]));
  } else {
    //If it's on client side, create a store with a persistability feature
    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["cart", "user"],
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = createStore(persistedReducer, bindMiddleware([logger]));
    store.__persistor = persistStore(store);
    return store;
  }
};

export const wrapper = createWrapper(initStore);
