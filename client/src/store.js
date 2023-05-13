import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { modalReducer } from "./reducer/modalReducer";
import { cartReducer } from "./reducer/cartReducer";
import axios from "axios";

const reducer = combineReducers({
    modal: modalReducer,
    cart: cartReducer
})


const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;