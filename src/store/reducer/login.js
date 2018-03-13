import * as TYPES from '../constants/login';

const initState = {
    name: 'userInfo',
    userInfo: null
}
const userInfo = (state = initState, action) => {
    switch (action.type) {
        case TYPES.LOGIN:
            return {...state, userInfo: action.userInfo }
        default:
            return {...state }
    }
}

export default userInfo;