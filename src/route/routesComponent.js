import Loading from '../components/common/Loading/index';
import Loadable from 'react-loadable';

// 路由懒加载
// 一级路由
export const Home = Loadable({
    loader: () =>
        import ('../components/Home/index'),
    loading: Loading
})
export const Classify = Loadable({
    loader: () =>
        import ('../components/Classify/index'),
    loading: Loading
})
export const Year = Loadable({
    loader: () =>
        import ('../components/Year/index'),
    loading: Loading
})
export const Shopcart = Loadable({
    loader: () =>
        import ('../components/Shopcart/index'),
    loading: Loading
})
export const Mine = Loadable({
    loader: () =>
        import ('../components/Mine/index'),
    loading: Loading
})