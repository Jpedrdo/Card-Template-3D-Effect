import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import GlobalStyles from "./GlobalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyles />
      <Card />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
