import "../styles/bootstrap.min.css";
import "../styles/icons/material-design/css/materialdesignicons.min.css";
import "../styles/global.css";
import App from "next/app";
import React from "react";
import { wrapper } from "../redux/store";

class WrappedApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
