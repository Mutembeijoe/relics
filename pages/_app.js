import "../styles/bootstrap.min.css";
import "../styles/icons/material-design/css/materialdesignicons.min.css";
import "../styles/global.css";
import App from "next/app";
import React from "react";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

const WrappedApp = ({ Component, pageProps }) => {
  const store = useStore();
  return (
    <PersistGate persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(WrappedApp);
