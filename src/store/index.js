import { applyMiddleware, combineReducers, createStore } from "redux";
import { filmReducer } from "./reducers/filmReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ film: filmReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
