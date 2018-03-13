import * as TYPES from '../constants/jslist';

const initState = {
    name: 'jdList'
}

const jdList = ((state = initState, action) => {
    switch (action.type) {
        case TYPES.JD_LIST:
            return {...state, jdList: action.jdList }
        default:
            return state
    }
});

export default jdList;