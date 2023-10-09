import React, { useState, useEffect, useRef } from "react";
import * as FileSystem from "expo-file-system";
import moment from "moment";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";

import {
    ScrollView,
    Image,
    View,
    Text,
    Alert,
    useWindowDimensions,
    Button,
} from "react-native";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Color } from "../src/assets/styles/Style.js";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

// Import Images
const InfoImage = require("~/assets/images/icons/info_icon.png");
import Touchable from "../src/components/Touchable.jsx";
import ImageTouchable from "../src/components/ImageTouchable.jsx";
import ImageModal from "../src/components/ImageModal.jsx";
import ImageNavigate from "../src/components/ImageNavigate.jsx";
const Images = require("../src/assets/data/image.json");

const historyInformation = () => {
    Alert.alert("About History", "1.\n2.", [
        {
            text: "I Understand",
            onPress: () => { },
        },
    ]);
};

class SlidePanel extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Show panel" onPress={() => this._panel.show()} />
                <SlidingUpPanel ref={(c) => (this._panel = c)}>
                    <View style={styles.container}>
                        <Text>Testing Stuff</Text>
                        <Button title="Hide" onPress={() => this._panel.hide()} />
                    </View>
                </SlidingUpPanel>
            </View>
        );
    }
}

export default function Gallery({ navigation }) {
    const [isLoaded] = useFonts({
        "montserrat-regular": require("~/assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-medium": require("~/assets/fonts/Montserrat-Medium.ttf"),
        "montserrat-bold": require("~/assets/fonts/Montserrat-Bold.ttf"),
    });

    const randomColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];
    const [recentImages, setRecentImages] = useState([]);
    const [images, setImages] = useState([]);
    const [panelPosition, setPanelPosition] = useState(0);

    const windowWidth = useWindowDimensions().width - 40;
    // const windowHeight = useWindowDimensions().height - 40;
    const smallImageSize = Math.floor(windowWidth / 3);

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync(); // hide the splashscreen
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

    const customStyles = StyleSheet.create({
        smallImage: {
            height: smallImageSize - 2,
            width: smallImageSize - 2,
            resizeMode: "cover",
            backgroundColor: randomColors[Math.floor(Math.random() * (4 - 0) + 0)],
            margin: 1,
        },
    });

    return (
        <View style={styles.container} onLayout={handleOnLayout}>


            <View style={styles.navigationBar}>
                <View style={styles.circle}></View>
                <Text style={{ fontSize: 22, fontFamily: "montserrat-bold" }}>
                    HISTORY
                </Text>
                <Touchable onPress={() => navigation.navigate('information')}>
                    <Image source={InfoImage} alt="Info" style={styles.iconImage} />
                </Touchable>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={7}
                bounces={false}
                scrollEnabled={true}
            >
                <Text style={{ fontSize: 24, fontFamily: "montserrat-medium" }}>
                    Hari Ini
                </Text>

                <ScrollView
                    contentContainerStyle={{
                        paddingTop: 25,
                        paddingBottom: 25,
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={7}
                    bounces={false}
                    scrollEnabled={true}
                >
                    {/* <ImageTouchable source={Images.image1} style={styles.recentImage} /> */}
                    <ImageModal source={Images.image1} />

                    <ImageNavigate source={Images.image1} style={styles.recentImage} targetPage={`image_view`} alt={`phone`} />

                    <Touchable>
                        <View style={styles.recentImage}>
                            <Text>Show Modal</Text>
                        </View>
                    </Touchable>



                    <View style={styles.recentImage}></View>
                    <View style={styles.recentImage}></View>
                    <View style={styles.recentImage}></View>
                    <View></View>
                </ScrollView>

                <Text style={{ fontSize: 24, fontFamily: "montserrat-medium" }}>
                    Kemarin
                </Text>

                <ScrollView
                    contentContainerStyle={{
                        paddingTop: 25,
                        paddingBottom: 25,
                    }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={10}
                    bounces={false}
                    scrollEnabled={true}
                >
                    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                        <ImageTouchable onPress={historyInformation} style={customStyles.smallImage} source={Images.image1} key={Images.image1} />

                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                    </View>
                </ScrollView>
            </ScrollView>

            <StatusBar style="auto"></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: Color.white,
        margin: 0,
        marginTop: 40,
        padding: 20,
    },
    slidePanelContainer: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        height: 32,
        width: 32,
        backgroundColor: Color.black,
        borderRadius: 16,
    },
    navigationBar: {
        flex: 0,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 25,
    },
    iconImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    recentImage: {
        flex: 1,
        width: 220,
        height: 300,
        resizeMode: "contain",
        borderRadius: 15,
        backgroundColor: Color.red,
        marginRight: 15,
    },
    smallGallery: {
        flexWrap: "wrap",
    },
});
