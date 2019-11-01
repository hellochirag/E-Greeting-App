/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : Splash Screen
 * @Description : App Launcher Screen,
 *
 */

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from '../theme/index';
import AppImages from '../assets/images/index';
import {smartScale} from '../utils/AppUtils';
import {Actions} from 'react-native-router-flux';

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.greeting();
            }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: smartScale(250), height: smartScale(200)}}
                    resizeMode={'contain'}
                    source={AppImages.imgGift}
                />
            </View>
        );
    }
}
