/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : Redux Store
 * @Description :
 *
 * @providesModule ReduxStore
 */


import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {
    getGreeting,
    toast,
} from './reducers';

const store = createStore(
    combineReducers({
        getGreeting,
        toast,
        form: formReducer,
    }),
    undefined,
    compose(applyMiddleware(thunk)),
);

export default store;
