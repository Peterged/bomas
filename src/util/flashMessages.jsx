import * as FlashMessage from 'react-native-flash-message';

const flashMessage = (message, type, position) => {
    FlashMessage.showMessage({
        message: message,
        type: type,
        position: position
    })
}

export default flashMessage;
