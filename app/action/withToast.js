/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : withToast
 * @Description :
 *
 * @providesModule withToast
 */

import {connect} from "react-redux";
import {toastSet} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
    toast: text => {
        dispatch(toastSet(text));
    }
});

export default connect(null, mapDispatchToProps);
