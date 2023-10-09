import * as React from 'react';
import * as FileSystem from 'expo-file-system';


const deleteFile = async (path, fileName, data = '') => {
    const documentDirectory = await FileSystem.documentDirectory;
    const filePath = `${documentDirectory}${path}/${fileName}`;

    await FileSystem.deleteAsync(filePath);
}

export default deleteFile;
