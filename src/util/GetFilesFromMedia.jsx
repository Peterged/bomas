import * as React from 'react';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';


/**
 *
 * @param {*} path Path will be added with FileSystem.documentDirectory
 * @returns {json}
 */
const getFilesFromMedia = async () => {
    const assets = await MediaLibrary.getAssetsAsync({
        mediaType: 'photo'
    });

    assets.assets.forEach(asset => {
        console.log(asset.uri);
        console.log('--------------------------------------------------------');
    })
    // console.info(JSON.stringify(assets.assets));
}

export default getFilesFromMedia;
