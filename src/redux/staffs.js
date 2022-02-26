import { STAFFS } from '../shared/staffs';
import * as ActionTypes from './ActionTypes';

export const Staffs = (state = STAFFS, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_STAFF:
            var staffName = action.payload;
            // comment.id = state.length;
            // comment.date = new Date().toISOString();
            console.log("staffName: ", staffName);
            return state.concat(staffName);
        default:
          return state;
      }
};