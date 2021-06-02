import {createStore, combineReducer,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./Components/Counter"
import userReducer from "./Components/User"
import { watcherSaga } from "./sagas/rootSaga";

const store = createStore(reducer, {}, applyMiddleware(...middleware));

const reducer = combineReducer({
    counter: counterReducer,
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

sagaMiddleware.run(watcherSaga)

export default store;