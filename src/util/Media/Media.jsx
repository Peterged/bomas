import * as MediaLibrary from 'expo-media-library';

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
        // await MediaLibrary.
    }

    async deleteAlbum(albumName) {
        // await MediaLibrary.
    }

    async getAlbum(folderName = this.folderName) {

    }

    async createMedia(folderName = this.folderName) {

    }

    async updateMedia(folderName = this.folderName) {

    }

    async getMedia(folderName = this.folderName) {
        const result = await MediaLibrary.getAssetsAsync();
    }

    async deleteMedia() {

    }
}
