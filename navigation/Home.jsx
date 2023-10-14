import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import {
    Image,
    Text,
    StyleSheet,
    View,
    Alert,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Color } from "~/assets/styles/Style.js";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Touchable from "../src/components/Touchable";

SplashScreen.preventAutoHideAsync();

// Images
const ConfusedPerson = require("~/assets/images/system/ConfusedPerson.png");

export default function Home({ navigation }) {
    const [isLoaded] = useFonts({
        "montserrat-regular": require("~/assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-medium": require("~/assets/fonts/Montserrat-Medium.ttf"),
        "montserrat-bold": require("~/assets/fonts/Montserrat-Bold.ttf"),
    });

    const handleOnLayout = useCallback(async ({ navigation }) => {
        if (isLoaded) {
            await SplashScreen.hideAsync(); // hide the splashscreen
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

    const alertComingSoon = () =>
        Alert.alert("Feature Unavailable", "coming soon.", [
            {
                text: "I Understand",
                onPress: () => { },
            },
        ]);

    return (
        <SafeAreaView style={styles.container} onLayout={handleOnLayout}>
            <Image
                source={ConfusedPerson}
                style={styles.images}
                aria-label="confused person"
            />
            <Text style={styles.warningText}>Images not found!</Text>
            <TouchableWithoutFeedback onPress={() => alertComingSoon()}>
                <Text style={styles.primary}>Learn More</Text>
                <Touchable onPress={navigation.navigate('InputIP')}></Touchable>
            </TouchableWithoutFeedback>


            <StatusBar style={`auto`} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 50,
    },
    warningText: {
        fontSize: 18,
        fontFamily: "montserrat-regular",
    },
    primary: {
        fontFamily: "montserrat-medium",
        width: 130,
        height: 38,
        backgroundColor: Color.lightBlue,
        color: Color.white,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 5,
        fontSize: 16,
    },
    images: {
        height: 200,
        resizeMode: "contain",
    },
});
