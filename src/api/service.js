import axios from 'axios';
import * as api from "./interface";

export const JDList = () => {
    return axios.get(api.jdlist)
}

export const JDClassify = () => {
    return axios.get(api.classify)
}

export const JDComments = () => {
    return axios.post(api.comments)
}

export const JDShopcart = (idx) => {
    return axios.post(api.shopcart, { id: idx })
}

export const JDLogin = (params) => {
    return axios.post(api.login, params)
}