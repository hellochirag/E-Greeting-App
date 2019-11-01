/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @providesModule Toast
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import Toast from 'react-native-simple-toast';
import styles from '../theme/index';

class MyToast extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            toast: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.toast.text != prevState.toast.text) {
            Toast.showWithGravity(nextProps.toast.text, Toast.LONG, Toast.BOTTOM);
            return ({
                toast: nextProps.toast.text
            })
        } else {
            return null
        }
    }

    render() {
        return (
            <Text style={styles.empty}/>
        );
    }
}

const mapStateToProps = state => ({
    toast: state.toast != '' ? state.toast : ''
});

export default connect(mapStateToProps)(MyToast);
