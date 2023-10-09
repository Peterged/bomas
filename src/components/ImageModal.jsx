import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Button,
    Modal,
    FlatList
} from 'react-native';

import { Color } from "~/assets/styles/Style.js";
import { useFonts } from "expo-font";
import Touchable from './Touchable';
import ImageTouchable from './ImageTouchable';

const deleteButton = require('~/assets/images/icons/DeleteButtonImage.png');
const editButton = require('~/assets/images/icons/EditButtonImage.png');
const shareButton = require('~/assets/images/icons/ShareButtonImage.png');
const arrowBack = require('~/assets/images/icons/ArrowBackButton.png');
const starFill = require('~/assets/images/icons/StarFillButton.png');
const starOutline = require('~/assets/images/icons/StarOutlineButton.png');


export default function ImageModal({ source }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    return (
        <Modal visible={modalVisible}
            onRequestClose={handleCloseModal}
            transparent
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: source }}
                    style={{ width: '100%', height: '100%' }}
                />

                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <Touchable
                        style={{ padding: 10, backgroundColor: '#ffffff' }}
                        onPress={() => {
                            // Share button action
                        }}
                    >
                        <Image alt={`SHARE`} source={shareButton} style={styles.buttonGroupImage} />
                    </Touchable>

                    <Touchable
                        style={{ padding: 10, backgroundColor: '#ffffff' }}
                        onPress={() => {
                            // Edit button action
                        }}
                    >
                        <Image alt={`EDIT`} source={editButton} style={styles.buttonGroupImage} />
                    </Touchable>

                    <Touchable
                        style={{ padding: 10, backgroundColor: '#ffffff' }}
                        onPress={() => {
                            // Edit button action
                        }}
                    >
                        <Image alt={`DELETE`} source={deleteButton} style={styles.buttonGroupImage} />
                    </Touchable>

                    <Touchable
                        style={{ position: 'absolute', top: 0, left: 0, padding: 10 }}
                        onPress={handleCloseModal}
                    >
                        <Image alt={`RETURN`} source={arrowBack} style={styles.buttonGroupImage} />
                    </Touchable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
