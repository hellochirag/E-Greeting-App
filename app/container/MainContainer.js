/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @providesModule MainContainer
 */
import React, {Component} from 'react';
import {View} from 'react-native';
// import Toast from 'Toast';
import { WINDOW} from 'AppUtils';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    render() {
        return (
            <View style={{ flex: 1,
                position: 'absolute',
                right: 0,
                left: 0,
                width: WINDOW.width,
                zIndex: 9999}}>
                {/*<Toast/>*/}
            </View>
        );
    }
}

export default MainContainer;
