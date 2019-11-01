/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : Redux Reducers
 * @Description :
 *
 * @providesModule ReduxReducers
 */

import {
    GREETING_SET,
    TOAST_SET
} from './actions';

import {ROLE_PEOPLE} from 'AppUtils';

const initialGreeting= {
    userName: '',
    message: '',
    imageURI: '',
};

export const toast = (state = '', action) => {
    if (action.type === TOAST_SET) {
        return action.text;
    } else {
        return state;
    }
};

export const getGreeting = (state = initialGreeting, action) => {
    const {payload, type} = action;
    if (type === GREETING_SET) {
        return {
            ...state,
            userName: (payload.userName === undefined) ? state.userName : payload.userName,
            message: (payload.message === undefined) ? state.message : payload.message,
            imageURI: (payload.imageURI === undefined) ? state.imageURI : payload.imageURI,
           };
    } else {
        return state;
    }
};

