import * as TYPES from '../constants/addToShopcart';

const initState = {
    name: 'addshopcartdata',
    shopcartData: []
}
const shopcartData = (state = initState, action) => {
    switch (action.type) {
        case TYPES.ADDTO_SHOPCART:
            //将数据存储到store中 
            if (!(action.shopcartData instanceof Array)) {
                state.shopcartData.push(action.shopcartData); // push进去的数据没有去重？？？
            } else {
                state.shopcartData = action.shopcartData
            }
            //将数据存储到本地
            localStorage.shopcartData = JSON.stringify(state.shopcartData)
            return {...state }
        default:
            return state
    }
}

export default shopcartData;