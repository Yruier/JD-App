import { combineReducers } from 'redux';
import nav from "./nav";
import classify from "./classify";
import jdList from "./jdlist";
import comments from './comments';
import shopcartData from './addToShopcart';
import userInfo from './login';

export default combineReducers({
    nav,
    classify,
    jdList,
    comments,
    shopcartData,
    userInfo
})