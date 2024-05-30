import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("root"));

root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
