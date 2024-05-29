import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store";

import { getReviewsData } from "@/store/reviews";

const defaultState = {
  language: {
    language: 'ru',
  },
  reviews: getReviewsData('ru'),
};

const store = configureStore(defaultState);

console.log(store.getState());

const root = createRoot(document.getElementById("root"));

root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
