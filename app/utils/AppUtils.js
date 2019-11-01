/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : AppUtils
 * @Description :
 *
 * @providesModule AppUtils
 */

import {Dimensions, Platform} from 'react-native';

export const WINDOW = Dimensions.get('window');
export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

export const iPhoneX = (Platform.OS === 'ios' && (WINDOW.height === 812 || WINDOW.height === 896));

export const FONT_PRIMARY_REGULAR = 'Raleway-Regular';
export const FONT_PRIMARY_BOLD = 'Raleway-Light';


export const smartScale = (value) => {
    const height = Platform.OS === 'ios' ? iPhoneX ? WINDOW.height - 78 : WINDOW.height : WINDOW.height - 24;
    if (deviceType == 'phone') {
        return (value * height) / 667;
    } else {
        return (value * height) / 667;
    }
};

//TODO:  Font Details

export const fontSizeMedium = smartScale((deviceType == 'phone') ? 14 : 14);
export const fontSizeSmall = smartScale((deviceType == 'phone') ? 14 : 16);
export const fontSizeContent = smartScale((deviceType == 'phone') ? 12 : 14);
export const fontSizeLarge = smartScale((deviceType == 'phone') ? 18 : 14);


