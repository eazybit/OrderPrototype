/**
 * created by Yu Zhang on 3/23/18
 */

import { LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';

export function userReducer(state: any = {}, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_FAILURE:
            console.error(action.payload.toString());
            return '';
        default:
            return state;
    }
}