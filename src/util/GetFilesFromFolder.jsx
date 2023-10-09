import * as React from 'react';
import * as FileSystem from 'expo-file-system';


/**
 *
 * @param {*} path Path will be added with FileSystem.documentDirectory
 * @returns {json}
 */
const getFilesFromFolder = async (folderPath) => {
    const documentDirectory = FileSystem.documentDirectory;

    

    await FileSystem.getInfoAsync(FileSystem.documentDirectory + folderPath).then(async (fileUri) => {
        if (fileUri.exists) {
            const files = await FileSystem.readDirectoryAsync(
                FileSystem.documentDirectory + folderPath
            );
            console.log(`Files found in ${folderPath}: [${files}]`);
        }
        else {
            console.log('not found')
        }
    });

    


}

export default getFilesFromFolder;
