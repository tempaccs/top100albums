import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global } from "@emotion/core";

ReactDOM.render(
  <div>
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily: `Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        },
        code: {
          fontFamily:
            'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
        }
      }}
    />
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
