import * as TYPES from '../constants/nav';

const initState = { name: 'nav' }
const nav = ((state = initState, action) => {
    switch (action.type) {
        case TYPES.CHANGE_NAME:
            return {...state, name: 'zzzzzzssssssss', age: action.age }
        case TYPES.NAV_LIST:
            return {...state, navs: action.navs }
        default:
            return {...state, name: 'zs', age: 18 }
    }
});

export default nav;