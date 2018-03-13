import * as TYPES from '../constants/addToShopcart';

const addToShopcartAction = (data) => {
    return {
        type: TYPES.ADDTO_SHOPCART,
        shopcartData: data
    }
}

export default addToShopcartAction;