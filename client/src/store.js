import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { modalReducer } from "./reducer/modalReducer";

const reducer = combineReducers({
    modal: modalReducer
})

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;