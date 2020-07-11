import {
  applyMiddleware,
  compose,
  createStore,
  Store as ReduxStore,
} from "redux";
import { createLogger } from "redux-logger";

import reducers, { initialState } from "./rootReducer";

const dev: boolean = process.env.NODE_ENV !== "production";

export type Store = ReduxStore<typeof initialState>;

export default (state = initialState): Store => {
  const middlewares = dev ? [createLogger()] : [];
  return createStore<typeof initialState, any, unknown, unknown>(
    reducers,
    state,
    compose(applyMiddleware(...middlewares)),
  );
};
