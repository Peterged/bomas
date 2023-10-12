import { useState } from 'react';
import {
    View,
    Animated,
    Image,
    Dimension
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Touchable from './Touchable';
Touchable

const SlideUpPanel = ({ containerStyle, viewStyle, height, children }) => {
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

    return (
        <View style={{ flex: 1 }}>
            <SlidingUpPanel animatedValue={animatedValue}>
                <View style={{ height: height ? 600 : height }}>
                    {children}
                </View>
            </SlidingUpPanel>

            <Button title="Animate panel out" onPress={() => {
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 500,
                }).start();
            }} />
        </View>
    );
}