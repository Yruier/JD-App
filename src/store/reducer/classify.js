import * as TYPES from '../constants/classify';

const initState = { name: 'classify' }

const classify = ((state = initState, action) => {
    switch (action.type) {
        case TYPES.CLASSIFY:
            return {...state, classify: action.classify }
        default:
            return state
    }
});

export default classify;