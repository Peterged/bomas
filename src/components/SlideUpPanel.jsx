import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Animated,
    Image,
    Dimension,
    StyleSheet
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default class SlideUpPanel extends React.Component {
    constructor() {
        const SlideUpPanelRef = useRef(null);
        const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

        const handleClosePanel = () => {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 500
            })
        }

        const handleOpenPanel = () => {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 500
            })
        }
    }
    render({ height, panelTitle, children }) {
        return (
            <View>
                <Button title='Show panel' onPress={() => this._panel.show()} />

                <SlidingUpPanel animatedValue={animatedValue} ref={c => this._panel = c} height={height ? 600 : height} >
                    <View style={styles.slideUpContainer}>
                        {/* Close Section */}
                        <View aria-label="closeSlideUpPanel" style={styles.closeSlideUpPanel}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>{panelTitle}</Text>
                            <IonIcons name="close-outline" size={24} color="#00000" onPress={() => this._panel.hide()} />
                        </View>
                        {/* Main Section */}
                        {children}
                    </View>
                </SlidingUpPanel>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slideUpContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeSlideUpPanel: {
        flex: 1,
        position: 'absolute',
        top: 0,
        padding: 15,
        marginBottom: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    panelTitle: {
        fontSize: 16,
        fontFamily: 'montserrat-medium'
    }
})
