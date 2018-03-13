import * as TYPES from '../constants/jslist';

const jdlistAction = (data) => {
    return {
        type: TYPES.JD_LIST,
        jdList: data.wareInfoList
    }
}

export default jdlistAction;