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

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
