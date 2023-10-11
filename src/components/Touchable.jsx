import React from 'react';
import * as FileSystem from 'expo-file-system';

import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions
} from 'react-native';

export default function Touchable({ ref, style, onPress, isHitSlop = false, disabled, children }) {
    if(typeof(isHitSlop) != 'boolean'){
        throw new RangeError('isHitSlop must be a boolean [true | false]');
    }
    return (
        <TouchableWithoutFeedback
            hitSlop={isHitSlop ? {top: 20, bottom: 20, left: 20, right: 20} : {}}
            // hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={onPress}
            disabled={disabled}
            style={style}
            ref={ref}
        >

            <View disabled={disabled} style={style}>
             {children}
            </View>
        </TouchableWithoutFeedback>
    );
}
