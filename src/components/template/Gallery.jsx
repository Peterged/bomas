import React, { useState, useEffect, useRef } from "react";
import * as FileSystem from "expo-file-system";
import moment from "moment";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";

import {
  ScrollView,
  Image,
  View,
  Text,
  Alert,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Color } from "../../assets/styles/Style.js";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

// Import Images
const InfoImage = require("~/assets/images/icons/info_icon.png");

// Get Images in a folder
// const images = images.sort(
//   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
// );
const historyInformation = () => {
  Alert.alert("About History", "1.\n2.", [
    {
      text: "I Understand",
      onPress: () => {},
    },
  ]);
};

// const ImageTo = require('~/assets/data/image.json');
const Images = require('../../assets/data/image.json');



export default function Gallery({ navigation }) {
  const [isLoaded] = useFonts({
    "montserrat-regular": require("~/assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("~/assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-bold": require("~/assets/fonts/Montserrat-Bold.ttf"),
  });

  const randomColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];
  const [recentImages, setRecentImages] = useState([]);
  const [images, setImages] = useState([]);

  const windowWidth = useWindowDimensions().width - 40;
  const windowHeight = useWindowDimensions().height - 40;
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

        <TouchableOpacity onPress={historyInformation}>
          <Image source={InfoImage} alt="Info" style={styles.iconImage} />
        </TouchableOpacity>
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
          {}
          <View style={styles.recentImage}></View>
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
            <TouchableOpacity style={customStyles.smallImage} onPress={navigation.navigate(`ImageView?id=${`image1`}`)}>
              <Image style={{objectFit: "cover"}} source={Images.image1} alt="mobile-design" key={"mobile-design"} />
            </TouchableOpacity>
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
    borderRadius: 15,
    backgroundColor: Color.red,
    marginRight: 15,
  },
  smallGallery: {
    flexWrap: "wrap",
  },
});
