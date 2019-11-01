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
import {View, Image, Animated, TouchableOpacity, Text, Alert} from 'react-native';
import styles from '../theme/index';
import AppImages from '../assets/images/index';
import {smartScale, WINDOW, iPhoneX, fontSizeMedium} from '../utils/AppUtils';
import {Actions} from 'react-native-router-flux';
import UploadImages from '../utils/UploadImages';
import Colors from '../theme/Colors';
import InputField from '../common/InputField';
import Icon from 'react-native-vector-icons/EvilIcons';
import withGreeting from '../action/withGreeting';

import {formValueSelector, reduxForm} from 'redux-form';
import {connect} from 'react-redux';


class GreetingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURI: '',
            userName: '',
            message: '',
        };
    }

    /**
     * This function for Select Profile Pic and Upload it details
     * @private
     */
    _profilePicSelection = () => {

        UploadImages(false).then(async (image) => {
            let name = Platform.OS === 'ios' ? image.sourceURL.slice(image.sourceURL.lastIndexOf('/') + 1) : image.path.slice(image.path.lastIndexOf('/') + 1);
            let imageData = (Platform.OS == 'android') ? {
                uri: image.path,
                name: name,
                type: image.mime,
                size: image.size,
            } : {
                uri: image.sourceURL,
                filename: name,
                name: name,
                type: image.mime,
                size: image.size,
            };
            this.setState({imageURI: imageData.uri, imageData});
        });
    };

    _showPreview = (object) => {
        //TODO : Next Preview Details
        const {imageURI} = this.state;
        if (imageURI.length < 4) {
            Alert.alert(
                'Alert Title',
                'Please Select Gift Photo',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
            return;
        }
        const {updateGreeting}= this.props;
        updateGreeting({
            userName: object.userName,
            message: object.message,
            imageURI: imageURI
        });
        Actions.previewGreeting();
    };


    render() {
        const {imageURI} = this.state;
        const {invalid, handleSubmit} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View>
                    <Image style={{height: WINDOW.height, width: WINDOW.width, position: 'absolute', top: 0, left: 0}}
                           resizeMode={'cover'}
                           source={AppImages.appBackground}/>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this._profilePicSelection();
                    }}
                    style={{
                        width: smartScale(200),
                        height: smartScale(200),
                        borderRadius: smartScale(100),
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
                        right: iPhoneX ?20:35,
                        top: iPhoneX ? smartScale(65) : smartScale(55),
                    }}>
                    <Animated.Image
                        source={imageURI ? {uri: imageURI} : AppImages.imgEmpty}
                        style={{
                            alignSelf: 'center',
                            borderRadius: smartScale(100),
                            width: Platform.OS === 'ios' ? smartScale(180) : smartScale(180),
                            height: Platform.OS === 'ios' ? smartScale(180) : smartScale(180),
                        }} resizeMode={'cover'}/>
                </TouchableOpacity>

                <View style={{
                    marginTop: smartScale(300),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <InputField
                        refProp={ref => this.userName = ref}
                        name="userName"
                        placeholder="User Name*"
                        changeSuccessColor={true}
                        leftSideComponent={
                            <Icon name={'user'} size={30}
                                  color={Colors.secondaryColor}/>
                        }
                        autoCapitalize="words"
                        autoCorrect={false}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        ellipsizeMode='tail'
                        numberOfLines={1}
                        onEndEditing={() => {
                            this.message.isFocused();
                        }}
                        onSubmitEditing={() => this.message.focus()}
                        containerStyle={{marginTop: smartScale(10)}}
                    />

                    <InputField
                        refProp={ref => this.message = ref}
                        name="message"
                        placeholder="Greeting Message*"
                        changeSuccessColor={true}
                        leftSideComponent={
                            <Icon name={'envelope'} size={30}
                                  color={Colors.secondaryColor}/>
                        }
                        autoCapitalize="words"
                        autoCorrect={false}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        ellipsizeMode='tail'
                        numberOfLines={5}
                        containerStyle={{marginTop: smartScale(10)}}
                        onSubmitEditing={() => {
                            if (!invalid) {
                                handleSubmit(this._showPreview);
                            }
                        }}
                    />

                    <TouchableOpacity
                        onPress={handleSubmit(this._showPreview)}
                        disabled={invalid}
                        style={[styles.shadowButton,
                            {marginTop: iPhoneX ? smartScale(40) : smartScale(10)},
                            (invalid) ? {backgroundColor: Colors.disableButtonBackground} : {backgroundColor: Colors.buttonBackground},
                        ]}>

                        <Text
                            style={[styles.headerTitle, {
                                flex: 1,
                                textAlign: 'center',
                                justifyContent: 'center',
                                fontSize: fontSizeMedium,
                                marginLeft: smartScale(10),
                            }]}>
                            {'Show Preview'}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text
                    style={[styles.headerTitle, {
                        flex: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: fontSizeMedium,
                        fontWeight: '400',
                        marginLeft: smartScale(10),
                        position: 'absolute', bottom: 40, left: 80,
                    }]}>
                    {'Developer By : Jadav Chirag'}
                </Text>

            </View>
        );
    }
}

const validate = values => {
    let errors = {};
    errors.userName = !values.userName
        ? 'User Name  Required'
        : undefined;

    errors.message = !values.message
        ? 'Greeting Message Required'
        : undefined;
    return errors;
};

const initialState = {
    userName: '',
    message: '',
};

const withForm = reduxForm({
    form: 'greetingForm',
    validate,
    initialValues: initialState,
});

const selector = formValueSelector('greetingForm');

const mapStateToProps = state => {
    return {
        message: selector(state, 'message'),
    };
};

export default connect(mapStateToProps, {})(withForm(withGreeting(GreetingScreen)));

;
