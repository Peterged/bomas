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
    ImageBackground,
    Share
} from 'react-native';

import { useFonts } from 'expo-font';
import * as FileSystem from 'expo-file-system';
import { Color } from '~/assets/styles/Style.js';
import { StatusBar } from 'expo-status-bar';
import Images from '../../assets/data//image.json';
const deleteButton = require('~/assets/images/icons/DeleteButtonImage.png');
const editButton = require('~/assets/images/icons/EditButtonImage.png');
const shareButton = require('~/assets/images/icons/ShareButtonImage.png');
const arrowBack = require('~/assets/images/icons/ArrowBackButton.png');
const starFill = require('~/assets/images/icons/StarFillButton.png');
const starOutline = require('~/assets/images/icons/StarOutlineButton.png');


SplashScreen.preventAutoHideAsync();
const win = Dimensions.get('window');

export default function ImageView ({ navigation }) {
    const route = useRoute();

    const shareInitiate = () => {
        const imageUri = '~/assets/images/duotone.png';

        const handleShare = async () => {
            const options = {
                url: imageUri
            }
        }

        try {
            (async () => {
                await Share.open(options);
            })();
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <View style={styles.container}>
            {/* Title and Favorite Button */}
            <View style={styles.navigationTop}>
                <TouchableOpacity onPress={navigation.goBack()}>
                    <View styles={styles.buttonGroup}>
                        <Image source={arrowBack} alt={`return_button`}/>
                        <Text style={styles.buttonText}></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={favoriteImage}>
                    <Image source={starOutline} style={buttonGroupImage} />
                </TouchableOpacity>
            </View>
            <ImageBackground imageStyle={styles.mainImage} source={Images.image1} alt={`BackgroundImage`}>

            </ImageBackground>

            <View style={{}}>
                <TouchableOpacity style={buttonGroup} onPress={shareInitiate}>
                    <Text style={buttonText}>Share</Text>
                    <Image source={shareButton} style={buttonGroupImage} />
                </TouchableOpacity>

                <TouchableOpacity style={buttonGroup}>
                    <Text style={buttonText}>Edit</Text>
                    <Image source={editButton} style={buttonGroupImage} />
                </TouchableOpacity>

                <TouchableOpacity style={buttonGroup}>
                    <Text style={buttonText}>Delete</Text>
                    <Image source={deleteButton} style={buttonGroupImage} />
                </TouchableOpacity>
            </View>

            {/* Share, Edit and Delete Button  */}

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.black,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    mainImage: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 'auto',
    },
    navigationTop: {
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center"
    },
    buttonGroup: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    buttonGroupImage: {
        flex: 1,
        width: 24,
        height: 24
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
