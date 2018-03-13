import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import jdList from "./jdList";
import classify from './classify.json';
import comments from './comments.json';
import userInfo from './login';
import * as api from '../api/interface';


const mock = new AxiosMockAdapter(axios)

const jdDatas = () => {
    // home页产品列表
    mock.onGet(api.jdlist).reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, jdList])
        })
    });
    // 分类页数据
    mock.onGet(api.classify).reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, classify])
        })
    });
    // 详情页评论数据
    mock.onPost(api.comments).reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, comments])
        })
    });
    // 购物车数据
    mock.onPost(api.shopcart).reply((config) => {
        const { data } = config;
        const { id } = JSON.parse(data);
        let { shopcartData } = localStorage;
        let newShopcartData = JSON.parse(shopcartData)

        for (let [index, val] of JSON.parse(shopcartData).entries()) {
            if (index === id.id) {
                newShopcartData[index].similarEnter = val.similarEnter * 1 + id.type;

                newShopcartData = JSON.stringify(newShopcartData)
                localStorage.setItem('shopcartData', newShopcartData)
            }
        }
        return new Promise((resolve, reject) => {
            resolve([200, newShopcartData])
        })
    });
    // 用户登录
    mock.onPost(api.login).reply((config) => {

        const { userName, pwd } = JSON.parse(config.data);
        let userData = null;

        for (let item of userInfo) {
            if (item.userName === userName && item.pwd === pwd) {
                userData = item.data;
            }
        }

        return new Promise((resolve, reject) => {
            resolve([200, userData])
        })
    });
}

export default jdDatas;