// import {createStore} from 'redux';
import {createStore, combineReducers} from 'redux';
import { Staffs } from './staffs';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs
        })
        // Reducer, // reducer
        // initialState, // our initialState
    );

    return store;
}