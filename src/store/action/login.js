import * as TYPES from '../constants/login';

const loginAction = (data) => {
    return {
        type: TYPES.LOGIN,
        userInfo: data
    }
}

export default loginAction