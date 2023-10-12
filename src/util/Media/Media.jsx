import * as MediaLibrary from 'expo-media-library';

const DEFAULT_ASSET_READ_LIMIT = 20;

export default class Media {
    constructor(folderName) {
        this.folderName = folderName;
    }

    async createAlbum() {
        const exists = await MediaLibrary.getAlbumAsync(folderName);
        if (exists?.title) {
            console.log(`ALREADY EXISTS. Album named ${folderName} is found`);
        }
        else {
            await MediaLibrary.createAlbumAsync(folderName).then(() => {
                console.log(`successfully created folder named ${folderName}`);
            })
        }
    }

    async updateAlbum(albumName, newAlbumName) {
        await MediaLibrary.
    }

    async deleteAlbum(albumName) {
        
    }

    async getAlbum(albumName) {
        const album = await 
    }

    async createAsset(assetName, data) {
        await MediaLibrary.createAssetAsync();
    }

    /**
     * 
     * @param {*} assetName 
     * @param {*} newData 
     */
    async updateAsset(assetName, newData) {

    }

    /**\
     * @param {string} assetName the name of your asset
     * @param {number} limit min 1, default 20, max 100. Only applies if you set your assetName into 'none'
     */
    async getAsset(assetName = 'none', limit = DEFAULT_ASSET_READ_LIMIT) {
        if(assetName == 'none') {
            // take all assets
        }
    }

    async deleteAsset(assetName) {

    }
}
