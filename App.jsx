import React, { useEffect, useState } from "react";

// Router
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
const Stack = createNativeStackNavigator();

// Components
import Home from "./navigation/Home";
import Gallery from "./navigation/Gallery";
import ImageView from "./navigation/ImageView";
import Information from "./navigation/Information";
import Favorites from './src/util/Favorites';

// Utility
import checkImagesInFolder from "./src/util/checkImagesInFolder";
import getImagesFromFolder from "./src/util/GetImagesFromFolder";
import createFolder from "./src/util/createFolder";
import { AppRegistry } from "react-native";
import createFile from "./src/util/createFile";
import deleteFile from "./src/util/deleteFile";


// REGISTER COMPONENTS


export default function App() {
  const [isThereImages, setIsThereImages] = useState(true);

  const checkIfImagesInFolderAsync = async () => {
    const imageFiles = await checkImagesInFolder("assets/images");
    setIsThereImages(imageFiles?.length > 0);
  };

  const createFolderForStorage = async () => {
    await createFolder("assets/images");
  };

  const settings = {
    "ip": "",
    "autoConnect": "true",
    "storageLocation": "assets/image",
    "image_quality": 90,
    "image_format": "jpeg",
    "image_size": [640, 480]
  };

  useEffect(() => {
    // createFile('assets/images', 'settings.json', JSON.stringify(settings));
    getImagesFromFolder('assets/images');
  }, []);

  const renderStackScreen = () => {
    if (isThereImages) {
      return (
        <Stack.Screen
          name="gallery"
          component={Gallery}
          options={{ headerShown: false }}

        ></Stack.Screen>
      );
    } else {
      return (
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
      );
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {renderStackScreen()}
        <Stack.Screen
          name="information"
          component={Information}
          options={{headerTitle: 'Information'}}
        ></Stack.Screen>
        <Stack.Screen
          name="image_view"
          component={ImageView}
          options={{headerTitle: 'ImageInformation'}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
AppRegistry.registerComponent("Home", () => Home);
AppRegistry.registerComponent("Gallery", () => Gallery);
// AppRegistry.registerComponent("ImageView", () => ImageView);
// AppRegistry.registerComponent("Favorites", () => Favorites);
