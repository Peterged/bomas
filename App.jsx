import React, { useEffect, useState } from "react";

// Router
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
const Stack = createNativeStackNavigator();

// Components
import Home from "~/components/template/Home";
import Gallery from '~/components/template/Gallery';
import ImageView from '~/components/template/ImageView';

// Utility
import checkImagesInFolder from "./src/util/checkImagesInFolder";
import createFolder from './src/util/createFolder';
import { AppRegistry } from "react-native";

export default function App() {
  const [isThereImages, setIsThereImages] = useState(true);
  const navigation = useNavigation();

  const checkIfImagesInFolderAsync = async () => {
    const imageFiles = await checkImagesInFolder('assets/images');
    setIsThereImages(imageFiles?.length > 0);
  };

  const createFolderForStorage = async () => {
    await createFolder('assets/images');
  }

  useEffect(() => {
    // createFolderForStorage();
    checkIfImagesInFolderAsync();
  }, []);


  const renderStackScreen = () => {
    if (!isThereImages) {
      return (
        <Stack.Screen
          name="gallery"
          component={Gallery}
          options={{ headerShown: false }}
          navigationKey={navigation}
        ></Stack.Screen>
      );
    } else {
      return (
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
          navigationKey={navigation}
        ></Stack.Screen>
      );
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {renderStackScreen()}
        {/* <Stack.Screen
          name="gallery"
          component={Gallery}
          options={{ headerShown: false }}
        ></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
AppRegistry.registerComponent('Home', () => Home);
AppRegistry.registerComponent('Gallery', () => Gallery);
AppRegistry.registerComponent('ImageView', () => ImageView);


// import RNFS from 'react-native-fs';
// import React, { useState } from 'react';
// import { Image } from 'react-native';

// const DisplayImageFromMyFolder = () => {
//   const [imageSource, setImageSource] = useState(null);

//   const readImageFromMyFolder = async () => {
//     const myFolderPath = `${RNFS.DocumentDirectoryPath}/my-folder`;
//     const imagePath = `${myFolderPath}/image.jpg`;

//     const imageData = await RNFS.readFile(imagePath);

//     setImageSource('data:image/jpeg;base64,' + imageData);
//   };

//   return (
//     <Image
//       source={{ uri: imageSource }}
//       style={{ width: 200, height: 200 }}
//     />
//   );
// };
