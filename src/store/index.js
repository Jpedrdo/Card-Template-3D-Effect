import { createStore, applyMiddleware, compose } from "redux";
import storeSynchronize from "redux-localstore";
import Reducers from "./reducers";

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;

storeSynchronize(store);
