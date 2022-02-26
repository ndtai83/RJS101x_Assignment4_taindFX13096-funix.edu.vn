import * as ActionTypes from './ActionTypes';

export const loadStaff = (staffName) => ({
    type: ActionTypes.LOAD_STAFF,
    payload: {
        staffName: staffName
    }
});