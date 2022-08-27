import { combineReducers, createStore } from "redux";
import { qlsvReducer } from "../BaiTapFormRedux/qlsvReducer";



const rootReducer = combineReducers({
    qlsvReducer : qlsvReducer
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());