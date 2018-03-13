import * as TYPES from '../constants/classify';

const classifyAction = (data) => {
    return {
        type: TYPES.CLASSIFY,
        classify: data
    }
}
export default classifyAction;