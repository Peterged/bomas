import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';




import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Dimensions,
    ImageBackground,
    Platform,
    SafeAreaView
} from 'react-native';

import * as Share from 'expo-sharing';
import { useFonts } from 'expo-font';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Color } from '~/assets/styles/Style.js';
import { StatusBar } from 'expo-status-bar';
import createNonTextFile from '../src/util/createNonTextFile';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaProvider } from 'react-native-safe-area-context';



// IMPORT ASSETS
import Images from '~/assets/data/image.json';
import Touchable from '../src/components/Touchable';
const deleteButton = require('~/assets/images/icons/DeleteButtonImage.png');
const editButton = require('~/assets/images/icons/EditButtonImage.png');
const shareButton = require('~/assets/images/icons/ShareButtonImage.png');
const arrowBack = require('~/assets/images/icons/ArrowBackButton.png');
const starFill = require('~/assets/images/icons/StarFillButton.png');
const starOutline = require('~/assets/images/icons/StarOutlineButton.png');


SplashScreen.preventAutoHideAsync();
const win = Dimensions.get('window');

export default function ImageView() {
    const route = useRoute();
    const navigation = useNavigation();

    const imageURI = Object.values(route.params.params).at(0);

    const shareInitiate = async () => {
        // const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        // if (status !== 'granted') {
        //     alert('Please accept to continue');
        // }

        const fileUri = await createNonTextFile('assets/images', new Date().toJSON() + '.jpeg', imageURI, 'base64');
        Share.shareAsync(fileUri);
        console.log('share success!');
    }

    return (
        <SafeAreaProvider style={styles.container}>
            {/* Title and Favorite Button */}
            <LinearGradient colors={['#000000C5', '#00000000']} style={styles.linearNavigationTop}>
                <View style={styles.navigationTop}>
                    <Touchable
                        onPress={() => navigation.goBack()}
                    >
                        <View styles={styles.buttonGroup}>
                            <Image style={styles.buttonGroupImage} source={arrowBack} alt={`return_button`} />
                        </View>
                    </Touchable>
                    {/* <TouchableOpacity onPress={favoriteImage}> */}
                    <Touchable>
                        <Image source={starOutline} style={styles.buttonGroupImage} />
                    </Touchable>
                </View>
            </LinearGradient>



            {/* <ImageBackground imageStyle={styles.mainImage} source={{ uri: imageURI }} alt={`BackgroundImage`}>

            </ImageBackground> */}
            <Image style={styles.mainImage} source={{ uri: imageURI }} alt={`BackgroundImage`} />

            <LinearGradient colors={['#00000000', '#000000C5']} style={styles.linearNavigationBottom}>
                <View style={styles.navigationBottom}>
                    <Touchable style={styles.buttonGroup} onPress={shareInitiate}>
                        <Image source={shareButton} style={styles.buttonGroupImage} />
                        <Text style={styles.buttonText}>Share</Text>
                    </Touchable>

                    <Touchable style={styles.buttonGroup}>
                        <Image source={editButton} style={styles.buttonGroupImage} />
                        <Text style={styles.buttonText}>Edit</Text>
                    </Touchable>

                    <Touchable style={styles.buttonGroup}>
                        <Image source={deleteButton} style={styles.buttonGroupImage} />
                        <Text style={styles.buttonText}>Delete</Text>
                    </Touchable>
                </View>
            </LinearGradient>

            {/* Share, Edit and Delete Button  */}

            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: Color.black,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    mainImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        height: 'auto',
    },
    linearNavigationTop: {
        flex: 1,
        position: 'absolute',
        top: 0,
        width: win.width,
        paddingBottom: 25,
        maxHeight: 155,
        height: 'auto'
    },
    linearNavigationBottom: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: win.width,
        paddingTop: 25,
        maxHeight: 155,
        height: 'auto'
    },
    navigationTop: {
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: 'row',
        marginTop: 5,
        padding: 15,
        zIndex: 1000
    },
    navigationBottom: {
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: 'row',
        padding: 15,
        marginBottom: 5
    },
    buttonGroup: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        width: 100,
        height: 50
    },
    buttonGroupImage: {
        flex: 1,
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    buttonText: {
        flex: 1,
        fontFamily: "montserrat-regular",
        fontSize: 14,
        color: Color.white
    },
    titleText: {
        flex: 1,
        fontSize: 16,
        fontFamily: "montserrat-medium"
    }
})
