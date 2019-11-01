/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 *
 * @Screen : withGreeting
 * @Description :
 *
 * @providesModule withGreeting
 */


import {connect} from 'react-redux';
import {greetingSet} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
    updateGreeting: value => {
        dispatch(greetingSet(value));
    },
});

const mapStateToProps = state => ({
    getGreeting: state.getGreeting,
});

export default connect(mapStateToProps, mapDispatchToProps);
