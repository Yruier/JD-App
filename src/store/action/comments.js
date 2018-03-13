import * as TYPES from '../constants/comments';

const commentsAction = (data) => {
    return {
        type: TYPES.COMMENTS,
        comments: data
    }
}
export default commentsAction;