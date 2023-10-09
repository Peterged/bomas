import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
// import Share from 'react-native-share';


import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Dimensions,
    ImageBackground
} from 'react-native';

import Share from 'expo-sharing';

import { useFonts } from 'expo-font';
import * as FileSystem from 'expo-file-system';
import { Color } from '~/assets/styles/Style.js';
import { StatusBar } from 'expo-status-bar';
import Images from '~/assets/data/image.json';
const deleteButton = require('~/assets/images/icons/DeleteButtonImage.png');
const editButton = require('~/assets/images/icons/EditButtonImage.png');
const shareButton = require('~/assets/images/icons/ShareButtonImage.png');
const arrowBack = require('~/assets/images/icons/ArrowBackButton.png');
const starFill = require('~/assets/images/icons/StarFillButton.png');
const starOutline = require('~/assets/images/icons/StarOutlineButton.png');


SplashScreen.preventAutoHideAsync();
const win = Dimensions.get('window');

export default function ImageView () {
    const route = useRoute();

    const imageURI = Object.values(route.params).at(0);
    console.log(typeof Object.values(route.params));

    // console.log(Object.values(route.params).at(0));

    const shareInitiate = async () => {

        const file = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + new Date().toJSON(), imageURI, { encoding: 'base64' });

        const result = await Share.shareAsync({
            type: 'image',
            data: file.uri,
        })

        if(result.action === 'sharedAction'){
            console.log('The image was shared successfuly');
        } else {
            console.log('Failed to share image');
        }
    }

    return (
        <View style={styles.container}>
            {/* Title and Favorite Button */}
            <View style={styles.navigationTop}>
                <TouchableOpacity
                    // onPress={navigation.goBack()}
                >
                    <View styles={styles.buttonGroup}>
                        <Image style={styles.buttonGroupImage} source={arrowBack} alt={`return_button`}/>
                        <Text style={styles.buttonText}></Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={favoriteImage}> */}
                <TouchableOpacity>
                    <Image source={starOutline} style={styles.buttonGroupImage} />
                </TouchableOpacity>
            </View>
            <ImageBackground imageStyle={styles.mainImage} alt={`BackgroundImage`}>

            </ImageBackground>

            <View style={styles.navigationTop}>
                <TouchableOpacity style={styles.buttonGroup} onPress={shareInitiate}>
                    <Text style={styles.buttonText}>Share</Text>
                    <Image source={shareButton} style={styles.buttonGroupImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonGroup}>
                    <Text style={styles.buttonText}>Edit</Text>
                    <Image source={editButton} style={styles.buttonGroupImage} width={40} height={40} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonGroup}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                    <Image source={deleteButton} style={styles.buttonGroupImage} />
            </View>

            {/* Share, Edit and Delete Button  */}

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Color.black,
        margin: 0,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    mainImage: {
        flex: 1,
        width: 500,
        resizeMode: 'cover',
        height: 500,
    },
    navigationTop: {
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: 'column',
        width: 500,
        height: 500
    },
    buttonGroup: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        width: 'auto',
        height: 'auto'
    },
    buttonGroupImage: {
        flex: 1,
        width: 24,
        height: 24,
        resizeMode: 'cover',
    },
    buttonText: {
        flex: 1,
        fontFamily: "montserrat-regular",
        fontSize: 14
    },
    titleText: {
        flex: 1,
        fontSize: 16,
        fontFamily: "montserrat-medium"
    }
})
