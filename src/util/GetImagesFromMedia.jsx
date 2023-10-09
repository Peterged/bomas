import * as React from 'react';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';


/**
 *
 * @param {*} path Path will be added with FileSystem.documentDirectory
 * @returns {json}
 */
const getFilesFromMedia = async () => {
    const assets = await MediaLibrary.getAssetsAsync();
    console.log(assets);
}

export default getFilesFromMedia;
