import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import $ from 'jquery';

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
import flashMessage from "../src/util/flashMessages.jsx";

SplashScreen.preventAutoHideAsync();

// Import Images
const InfoImage = require("~/assets/images/icons/info_icon.png");
import Touchable from "../src/components/Touchable.jsx";
import ImageTouchable from "../src/components/ImageTouchable.jsx";
import ImageNavigate from "../src/components/ImageNavigate.jsx";
import { getStorage } from "../src/util/storage/saveAsyncStorage.jsx";
import axios from "axios";
const Images = require("../src/assets/data/image.json");

const historyInformation = () => {
    Alert.alert("About History", "1.\n2.", [
        {
            text: "I Understand",
            onPress: () => { },
        },
    ]);
};

// class SlidePanel extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button title="Show panel" onPress={() => this._panel.show()} />
//                 <SlidingUpPanel ref={(c) => (this._panel = c)}>
//                     <View style={styles.container}>
//                         <Text>Testing Stuff</Text>
//                         <Button title="Hide" onPress={() => this._panel.hide()} />
//                     </View>
//                 </SlidingUpPanel>
//             </View>
//         );
//     }
// }

export default function Gallery({ navigation }) {
    const [isLoaded] = useFonts({
        "montserrat-regular": require("~/assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-medium": require("~/assets/fonts/Montserrat-Medium.ttf"),
        "montserrat-bold": require("~/assets/fonts/Montserrat-Bold.ttf"),
    });

    const randomColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];
    const [recentImages, setRecentImages] = useState([]);
    const [images, setImages] = useState([]);
    const slidingUpPanelRef = useRef(null);
    const [IP, setIP] = useState('');

    const windowWidth = useWindowDimensions().width - 40;
    const smallImageSize = Math.floor(windowWidth / 3);

    useEffect(() => {
        async function fetchStorage() {
            let data = await getStorage('ip');
            data = data ? JSON.parse(data) : '';
            setIP(data);
        }
        fetchStorage();
    }, []);

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync(); // hide the splashscreen
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }
    const handleGetStorage = async (name) => {
        let data = await getStorage('ip');
        data = data ? JSON.parse(data) : '';
        console.log(data);
    }



    const customStyles = StyleSheet.create({
        smallImage: {
            height: smallImageSize - 2,
            width: smallImageSize - 2,
            resizeMode: "cover",
            // objectFit: 'cover',
            backgroundColor: randomColors[Math.floor(Math.random() * (4 - 0) + 0)],
            margin: 1,
        },
    });

    return (
        <View style={styles.container} onLayout={handleOnLayout}>
            <View style={styles.navigationBar}>
                <Touchable style={styles.circle} onPress={() => navigation.navigate('input_ip')}></Touchable>
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

                    <ImageNavigate source={Images.image1} style={styles.recentImage} targetPage={`image_view`} alt={`phone`} />
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
                        <ImageNavigate source={Images.image1} style={customStyles.smallImage} targetPage={`image_view`} alt={`phone`} />
                        <Touchable style={[customStyles.smallImage, { backgroundColor: '#00FF00' }]} onPress={async () => {

                            axios.get(`http://${IP}/`, {
                                params: {
                                    data: 'turn180'
                                }
                            })
                                .then((response) => {
                                    console.log(response)
                                })
                                .catch((error) => {
                                    console.error(error)
                                })


                        }}></Touchable>
                        <Touchable style={[customStyles.smallImage, { backgroundColor: '#0000FF' }]} onPress={() => handleGetStorage('ip')}></Touchable>
                        <Touchable style={[customStyles.smallImage, { backgroundColor: '#00FFFF' }]} onPress={async () => {
                            console.log('sent get request');
                            axios.get(`http://${IP}/`, {
                                params: {
                                    data: 'turn0'
                                }
                            })
                                .then((response) => {
                                    console.log(response)
                                })
                                .catch((error) => {
                                    console.error(error)
                                })




                        }}></Touchable>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                        <View style={customStyles.smallImage}></View>
                    </View>
                </ScrollView>
            </ScrollView>

            {/* <Touchable style={styles.floatingMessage}>
                    <Text style={{ fontSize: 14, fontWeight: '600'}}>{getStorage('IP')}</Text>
            </Touchable> */}


            <StatusBar style="auto" />
        </View >
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
    floatingMessage: {
        position: 'absolute',
        bottom: 0,
        margin: 15,
        padding: 15,
        borderRadius: 15,
        width: '100%',
    }
});
