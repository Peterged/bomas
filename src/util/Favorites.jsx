import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
    Image,
    Alert,
    Dimensions
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Color } from '~/assets/styles/Style.js';
import * as FileSystem from 'expo-file-system';
import { NavigationContainer } from '@react-navigation/native';

// Create a custom header on top of page
export default function Favorites ({ navigation }) {
    return (
        <NavigationContainer>
            <View style={header}>
                <Text>Test</Text>
            </View>

            <StatusBar style='auto' />
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {

    }
})
