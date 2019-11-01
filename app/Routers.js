/**
 *  * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @providesModule Routers
 */
import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {
    Router,
    Scene,
    Stack,
} from 'react-native-router-flux';

import SplashScreen from './container/SplashScreen';
import GreetingScreen from './container/GreetingScreen';
import PreviewGreetingScreen from './container/PreviewGreetingScreen';

class Routers extends Component {
    constructor(props) {
        super(props);
    }

    _routeScreens() {
        return (
            <Scene key="root">
                <Scene key="splash" component={SplashScreen} hideNavBar={true} initial />

                <Stack key="greeting" hideNavBar={true} >
                    <Scene key="greeting" component={GreetingScreen} hideNavBar={true}/>
                    <Scene key="previewGreeting" component={PreviewGreetingScreen} hideNavBar={false} title={'Preview'} />
                </Stack>

            </Scene>
        );
    }

    render() {
        return <Router>{this._routeScreens()}</Router>;
    }
}


export default Routers;
