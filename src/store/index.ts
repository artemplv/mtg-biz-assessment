import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";

import languageReducer from "./language";
import reviewsReducer from "./reviews";

export const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
});

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

export default configureStore;
