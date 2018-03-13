import * as components from './routesComponent';

const ROUTES = [{
    to: '/',
    text: '首页',
    icon: 'home',
    component: components.Home
}, {
    to: '/classify',
    text: '分类',
    icon: 'classify',
    component: components.Classify
}, {
    to: '/year',
    text: '年货节',
    icon: 'girl',
    component: components.Year
}, {
    to: '/shopcart',
    text: '购物车',
    icon: 'gouwuche',
    component: components.Shopcart
}, {
    to: '/mine',
    text: '我的',
    icon: 'mine',
    component: components.Mine
}];

export default ROUTES;