import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

/**
 * 
 * @param {string} targetPath 
 * @param {base64String} data 
 * @param {string} fileName 
 * @param {string=} [encoding] 
 * @returns {string}
 */
const createNonTextFile = async (targetPath, fileName, data, encoding) => {
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    console.log(fileUri);

    
    await FileSystem.writeAsStringAsync(fileUri, data, {
        encoding: 'base64' || encoding
    })
    await MediaLibrary.saveToLibraryAsync(fileUri).then(() => {
        console.log(`Success on saving : ${fileName} on ${fileUri}`);
    });

    return fileUri;
}

export default createNonTextFile;