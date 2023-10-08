import * as FileSystem from "expo-file-system";

const checkImagesInFolder = async (folderPath) => {
  await FileSystem.getInfoAsync(FileSystem.documentDirectory + folderPath).then(async (fileUri) => {
    console.log(fileUri);
    if (fileUri.exists) {
      const files = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory + folderPath
      );
      //   console.log(FileSystem.documentDirectory + folderPath);
      const imageFiles = files.filter((file) => /\.(png|jpg|jpeg)$/.test(file));


      if (imageFiles?.length > 0) {
        return true;
      }
      return false;
    }
    return false;
  });
};

export default checkImagesInFolder;
