import MediaLibrary from 'expo-media-library'

const deleteMedia = () => {
    MediaLibrary.deleteAssetsAsync()
}

export default deleteMedia;
