import * as React from 'react';
import * as FileSystem from 'expo-file-system';

class FileStorage {
    constructor(defaultFolderPath = "assets"){
        (async () => {
            this.documentDirectory = await FileSystem.documentDirectory;
            this.defaultPath = await FileSystem.documentDirectory + defaultFolderPath;
        })();
    }

    async setDefaultFolderPath(defaultFolderPath) {
        this.defaultPath = this.documentDirectory + defaultFolderPath;
    }

    async add(folderOrFile, pathToFolder = this.defaultFolderPath){
        if(['folder', 'file'].some(type => type != folderOrFile)){
            throw new RangeError("Type must be between 'folder' or 'file'");
        }

        if(this.defaultPath !== pathToFolder){
            pathToFolder = this.defaultPath + pathToFolder;
        }

        if(folderOrFile === 'folder'){
            await FileSystem.getInfoAsync(pathToFolder)
            await FileSystem.makeDirectoryAsync(pathToFolder, {
                intermediates: true
            })
            .then(msg => {
                console.log('Success!');
            })
        }
        await FileSystem.makeDirectoryAsync(this.documentDirectory)
    }

    async remove(filename, folderPath = this.defaultPath) {
        const documentDirectory = await FileSystem.documentDirectory;
    }
}
