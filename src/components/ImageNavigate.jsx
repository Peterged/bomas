import React from 'react';
import Touchable from './Touchable';

import { useNavigation } from '@react-navigation/native';

import {
    Image
} from 'react-native';

export default function ImageNavigate({ style, alt, source, width, height, targetPage }) {
    const navigation = useNavigation();

    return (
        <React.Fragment>
            <Touchable onPress={() => navigation.navigate(targetPage, { params: {
                image: source,
            }})} >
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
