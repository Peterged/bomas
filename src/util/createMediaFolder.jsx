import * as MediaLibrary from 'expo-media-library';



const createMediaFolder = async (folderName) => {
    const exists = await MediaLibrary.getAlbumAsync(folderName);
    if(exists?.title) {
        console.log(`ALREADY EXISTS. Album named ${folderName} is found`);
    }
    else {
        await MediaLibrary.createAlbumAsync(folderName).then(() => {
            console.log(`successfully created folder named ${folderName}`);
        })
    }
}

export default createMediaFolder;
