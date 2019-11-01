/**
 * E Greeting App
 * https://github.com/JadavChirag/E-Greeting-App.git
 *
 * @Developer : Jadav Chirag
 * @Author : Jadav Chirag
 * @Date : 1 Nov 2019
 *
 * @Screen : Register Input Field
 * @Description :
 *
 * @providesModule InputField
 */

import React, {Component} from 'react';
import {View, TextInput, Platform, Text, TouchableOpacity} from 'react-native';
import {Field} from 'redux-form';
import styles from 'Styles';
import Colors from "../theme/Colors";
import {smartScale} from "../utils/AppUtils";



class CustomField extends Component {
    focusInput() {
        if (this.input) {
            this.input.focus();
        }
    }
    _doFormat = (mask, reference) => {
        const {onChangeText} = this.props;
        let newReference = mask;
        let ignoreCount = 0;
        for (let n = 0; n < reference.length; n++) {
            if (reference.charAt(n) != mask.charAt(n)) {
                newReference = newReference.replace('X', reference.charAt(n));
                mask.charAt(n) != 'X' && ignoreCount++;
            }
        }
        newReference = newReference.substr(0, reference.length + ignoreCount);
        onChangeText(newReference);
    }

    render() {
        const {
            refProp, input, multiline, keyboardType, inputFormat, onChangeText, changeSuccessColor, placeholder, secureTextEntry, _onFocus, _onBlur,
            selectTextOnFocus, containerStyle, onLayout, ellipsizeMode, numberOfLines, returnKeyType, autoFocus, onEndEditing, autoGrow, maxLength, autoCapitalize, placeholderTextColor, autoCorrect, style, disabled, meta: {touched, error, warning}, leftSideComponent, onSubmitEditing,
            labelComponent, info, onInfoPress, itemInputStyle
        } = this.props;
        const hasError = (typeof error !== 'undefined' ? true : false);
        const itemStyle = (itemInputStyle) ? itemInputStyle : styles.registerInputField;
        let returnKey = (returnKeyType) ? (Platform.OS === 'android') ? returnKeyType : (keyboardType && keyboardType === 'numeric') ? 'done' : returnKeyType : null;

        return (
            <View onLayout={onLayout} style={[containerStyle]}>
                {labelComponent}
                <View style={itemStyle} underline error={hasError && touched}>
                    {
                        (leftSideComponent) &&
                        <View>
                            {leftSideComponent}
                        </View>
                    }
                    <TextInput {...input}
                               ref={refProp ? refProp : (node) => this.input = node}
                               multiline={multiline}
                               keyboardType={keyboardType}
                               placeholder={placeholder}
                               secureTextEntry={secureTextEntry}
                               selectTextOnFocus={selectTextOnFocus}
                               placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.placeholderTextColor}
                               style={Object.assign([styles.inputStyle, style])}
                               placeholderStyle={styles.placeholder}
                               autoCapitalize={autoCapitalize}
                               autoCorrect={autoCorrect}
                               autoGrow={autoGrow}
                               returnKeyType={returnKey}
                               autoFocus={autoFocus}
                               onEndEditing={onEndEditing}
                               onSubmitEditing={onSubmitEditing}
                               numberOfLines={numberOfLines}
                               ellipsizeMode={ellipsizeMode}
                               maxLength={maxLength}
                               editable={!disabled}
                               underlineColorAndroid={Platform.OS === 'android' ? 'transparent' : null}
                               onChangeText={(typeof inputFormat != 'undefined') ? this._doFormat.bind(this, inputFormat) : onChangeText}
                               {...(_onFocus) ? {
                                   onFocus: () => {
                                       _onFocus()
                                   }
                               } : {}}
                               {...(_onBlur) ? {
                                   onBlur: () => {
                                       _onBlur()
                                   }
                               } : {}}
                    />
                </View>
                <View
                    style={[styles.infoInputRaw, (info) ? {height: smartScale(25)} : {height: smartScale(14)}]}>
                    {(hasError && touched) ?
                        <View style={styles.errorInputRaw}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View> : null}

                    {(info) && <TouchableOpacity
                        style={styles.infoRaw}
                        onPress={onInfoPress}>
                        <Text style={styles.infoText}>{info}</Text>
                    </TouchableOpacity>}

                </View>
            </View>
        )
    }
}

class InputField extends Component {
    focus() {
        this.foo.getRenderedComponent().focusInput()
    }

    render() {
        return (
            <Field
                {...this.props}
                component={CustomField}
                ref={node => this.foo = node}
                withRef
            />
        );
    }

}

export default InputField;
