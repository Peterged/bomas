import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import InputWithChecking from "../src/components/InputWithChecking";
import flashMessage from "../src/util/flashMessages";
import { saveStorage, getStorage, scheduleStorageRemoval } from "../src/util/storage/saveAsyncStorage";
import { useState } from "react";



export default function InputIP({ navigation }) {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (pageName) => {
        flashMessage('Successfully saved your ip!', 'success', 'bottom', true);
        saveStorage('ip', inputValue);
        navigation.navigate(pageName);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: 'bold' }}>IP Address</Text>
            <InputWithChecking
                regularExpression={/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/}
                placeholder={`e.g. 171.123.159.25`}
                styleView={styles.viewStyle}
                styleInput={styles.inputStyle}
                styleButton={styles.buttonStyle}
                buttonText={`SAVE`}
                onChange={setInputValue}
                onSubmit={() => handleSubmit('gallery')}
            />
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 25,
        height: '100%',
        backgroundColor: 'white'
    },
    inputStyle: {
        backgroundColor: '#EBEDFB',
        borderRadius: 10,
        width: '100%',
        fontSize: 14,
        padding: 15,
        color: '#808080',
    },
    buttonStyle: {
        fontWeight: 'bold',
        color: '#ffffff'
    },
    viewStyle: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        padding: 10,
        paddingHorizontal: 5,
        width: '100%',
        backgroundColor: '#636363',
        borderRadius: 100
    }
})
