import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";

import {
    StyleSheet
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import InputWithChecking from "../src/components/InputWithChecking";



export default function InputIP() {
    return (
        <SafeAreaView style={styles.container}>
            <InputWithChecking regularExpression={/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/} styleInput={styles.inputStyle} styleButton={styles.buttonStyle} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    inputStyle: {
        backgroundColor: '#EBEDFB',
        borderRadius: 10,
        width: '100%',
        fontSize: 14,
        padding: 25,
        color: '#808080',
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 0,
        margin: 15,
        width: '100%',
        borderRadius: 100,
    }
})
