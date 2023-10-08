import React from 'react';
import FileSystem from 'expo-file-system';
import { StatusBar } from 'expo-status-bar';
import Touchable from './Touchable';

import {
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { useFonts } from "expo-font";
import { Color } from '~/assets/styles/Style.js';

export default function ImageTouchable({ style, alt, source,  width, height, onPress }) {
    return (
        <React.Fragment>
            <Touchable onPress={onPress} >
                <Image
                    source={{ uri: source }}
                    style={style}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </Touchable>
        </React.Fragment>
    );
}
