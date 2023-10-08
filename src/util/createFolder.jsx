import * as FileSystem from "expo-file-system";

const createFolder = async (name) => {
    var nameArr = name.split(/\/+/g).map(n => '/' + n);
    nameArr[0] = nameArr.at(0).slice(1);
    const documentDirectory = FileSystem.documentDirectory;
    let pathIncrementName = "";

    try {
        nameArr.forEach(async (folderName) => {
            pathIncrementName += folderName;
            await FileSystem.getInfoAsync(documentDirectory + pathIncrementName)
            .then(async (fileUri) => {
                if(!fileUri.exists){
                    await FileSystem.makeDirectoryAsync(documentDirectory + pathIncrementName, {
                        intermediates: true
                    })
                    .then(async n => {
                        // console.log(n);
                        // FileSystem.getInfoAsync(documentDirectory + pathIncrementName);
                    })
                }
            })
        });


    } catch (error) {
        console.log('error');
    }
};

export default createFolder;
