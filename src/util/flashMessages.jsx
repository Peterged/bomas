import * as FlashMessage from 'react-native-flash-message';

const flashMessage = (message, type, position, float = false) => {
    FlashMessage.showMessage({
        message: message,
        type: type,
        position: position,
        floating: float
    })
}

export default flashMessage;
