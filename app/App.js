/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : App
 * @Description : App Launcher Screens
 *
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Store from './redux/store';
import {WINDOW} from './utils/AppUtils';
import Routers from './Routers';
import MainContainer from './container/MainContainer';

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content"/>
                    <Routers/>
                    <MainContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        right: 0,
        left: 0,
        width: WINDOW.width,
        zIndex: 9999
    },
});
