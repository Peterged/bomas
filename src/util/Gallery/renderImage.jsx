import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';


import ImageNavigate from '../../components/ImageNavigate';


const renderImage = ({ item }) => {
    if(item?.uri) {
        throw new RangeError('Item object must contain a uri property');
    }

    return (
        <ImageNavigate source={{ uri: item?.uri }} style={} />
    );
}

const styles = StyleSheet.create({
    recentImage: {
        flex: 1,
        width: 220,
        height: 300,
        resizeMode: "contain",
        borderRadius: 15,
        marginRight: 15,
    }
})
