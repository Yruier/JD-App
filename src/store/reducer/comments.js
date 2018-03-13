import * as TYPES from '../constants/comments';

const initState = {
    name: 'comments'
}
const comments = (state = initState, actions) => {
    switch (actions.type) {
        case TYPES.COMMENTS:
            return {...state, comments: actions.comments }
        default:
            return state;
    }
}

export default comments;