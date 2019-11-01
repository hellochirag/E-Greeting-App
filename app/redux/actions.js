/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : ReduxActions
 * @Description :
 *
 * @providesModule ReduxActions
 */


export const GREETING_SET = 'greeting/SET';
export const TOAST_SET = 'toast/SET';

export const toastSet = text => ({
    type: TOAST_SET,
    text,
});

export const greetingSet = (data) => dispatch => {
    dispatch({
        type: GREETING_SET,
        payload: data,
    });
};
