import React from "react";
import "@atlaskit/css-reset/dist/bundle.css";
import App from "./App";
import "@atlaskit/css-reset";
import { createRoot } from "react-dom/client";
import { view } from "@forge/bridge";
const container = document.getElementById("root");
const root = createRoot(container!);

const renderApp = () => {
  root.render(<App />);
};
view.theme
  .enable()
  .then(() => {
    renderApp();
  })
  .catch((e) => {
    console.error(e.message);
    renderApp();
  });
