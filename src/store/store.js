import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducers from "./reducers/rootReducer";

let middleware = [reduxThunk];

export const store = createStore(rootReducers, applyMiddleware(...middleware));
