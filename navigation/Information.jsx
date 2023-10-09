import * as React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

import Touchable from '../src/components/Touchable';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Information({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
})
