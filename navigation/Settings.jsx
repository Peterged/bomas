import * as React from 'react';

import {
    Text,
    TextInput,
    View,
    Image,
    StyleSheet
} from 'react-native';

import Touchable from '../src/components/Touchable';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Textinput></Textinput>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        fontSize: 14
    }
})
