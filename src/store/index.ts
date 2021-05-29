import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

const middlewareEnancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnancer);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState?: AppState) {
  return createStore(rootReducer, initialState, composedEnhancers);
}
