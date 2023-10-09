import { Permissions, Alert } from 'react-native';

import * as MediaLibrary from 'expo-media-library';

const requestMediaLibraryPermission = async () => {
  const status = await MediaLibrary.requestPermissionsAsync();

  if (status !== 'granted') {
    // The user denied the permission.
    // You need to handle this case in your app.
    // alert('You must agree! Please refresh the app');
  }

//   return new Promise((resolve) => {
//     return (status == 'granted');
//   });
};

export default requestMediaLibraryPermission;
