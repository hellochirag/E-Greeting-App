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
import {View, Image, TouchableOpacity, Animated, Text} from 'react-native';
import styles from '../theme/index';
import AppImages from '../assets/images/index';
import {fontSizeLarge, iPhoneX, smartScale, WINDOW,FONT_PRIMARY_BOLD} from '../utils/AppUtils';
import withGreeting from '../action/withGreeting';

 class PreviewGreetingScreen extends Component {

     constructor(props) {
         super(props);
     }

    render() {
        const {getGreeting} = this.props;

        return (
            <View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View>
                    <Image style={{height: WINDOW.height, width: WINDOW.width, position: 'absolute', top: 0, left: 0}}
                           resizeMode={'cover'}
                           source={AppImages.previewBackground}/>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this._profilePicSelection();
                    }}
                    style={{
                        width: smartScale(240),
                        height: smartScale(240),
                        borderRadius: smartScale(120),
                        borderWidth: 2,
                        alignSelf: 'center',
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderColor: 'white',
                        shadowOffset: {
                            height: 2,
                            width: 1,
                        }, shadowRadius: 5,
                        shadowColor: 'black',
                        shadowOpacity: 0.9,
                        elevation: Platform.OS === 'ios' ? 5 : 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        opacity:0.8,
                        left: 20,
                        top: iPhoneX ? smartScale(230) : smartScale(200),
                    }}>
                    <Animated.Image
                        source={getGreeting.imageURI ? {uri: getGreeting.imageURI} : AppImages.imgEmpty}
                        style={{
                            alignSelf: 'center',
                            borderRadius: smartScale(120),
                            width: Platform.OS === 'ios' ? smartScale(200) : smartScale(180),
                            height: Platform.OS === 'ios' ? smartScale(200) : smartScale(180),
                        }} resizeMode={'cover'}/>
                </TouchableOpacity>

                <Text
                    style={[styles.headerTitle, {
                        flex: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontFamily:FONT_PRIMARY_BOLD,
                        fontSize: fontSizeLarge,
                        fontWeight: '600',
                        marginLeft: smartScale(10),
                        flexWrap: 'wrap',
                        position: 'absolute', top: 180, left: 20,right:20
                    }]}>
                    {getGreeting.message}
                </Text>


                <Text
                    style={[styles.headerTitle, {
                        flex: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: fontSizeLarge,
                        fontWeight: '400',
                        marginLeft: smartScale(10),
                        position: 'absolute', bottom: 140, left: 30,
                    }]}>
                    {getGreeting.userName}
                </Text>


            </View>
        );
    }
}
export default withGreeting(PreviewGreetingScreen)
