/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : UploadImages
 * @Description :
 *
 * @providesModule UploadImages
 */

import React, {Component} from 'react';
import {Platform, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

_onGallery = (multiple) => {
    return new Promise(resolve => {
        ImagePicker.openPicker({
            multiple: multiple,
        }).then(images => {
            resolve(images);
        });
    });
};

_onCamera = () => {
    return new Promise(resolve => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
            console.log(image);
            if (Platform.OS === 'ios') {
                let images = [];
                image.sourceURL = image.path;
                images.push(image);
                resolve(images);
            } else {
                resolve(image);
            }

        });

    });

};

export default UploadImages = (multiple) => {
    return new Promise(resolve => {
        Alert.alert(
            'Photos',
            'Please let us access your camera to add your picture.',
            [
                {text: 'Select from Gallery', onPress: () => resolve(_onGallery(multiple))},
                {text: 'Take picture', onPress: () => resolve(_onCamera())},
                {text: 'Cancel'},
            ],
            {cancelable: false},
        );
    });
};
