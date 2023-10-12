import React from 'react';

import {
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default function Touchable({ style, onPress, isHitSlop = false, disabled, children }) {
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
        >
            <View disabled={disabled} style={style}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}
