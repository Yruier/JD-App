import { navs } from '../../mock/nav';
import * as TYPES from '../constants/nav';

const navsAction = () => {
    return {
        type: TYPES.NAV_LIST,
        navs: navs
    }
}
export default navsAction;