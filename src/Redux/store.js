import { createStoreHook } from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const enchaner = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
/* const store = createStore(reducers,enchaner(applyMiddleware(reduxThunk))); */
const store = configureStore({
    reducer : {
        user : userSlice
    }
})
export default store;