import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styleAccordionItem from '../../Css/styleAccordionItems';

const AccordionListItem = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState('');

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });


    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`],
    });

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
                setWidthHeight: true,
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
                setWidthHeight: true,
            }).start();
        }
        setOpen(!open);
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={() => toggleListItem()}>
                <View style={styleAccordionItem.titleContainer}>
                    <Text>{title}</Text>
                    <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
                        <MaterialIcons name="keyboard-arrow-down" />
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={[styleAccordionItem.bodyBackground, { height: bodyHeight }]}>
                <View style={styleAccordionItem.bodyContainer}
                    onLayout={event => setBodySectionHeight(event.nativeEvent.layout.height)}>
                    {children}
                </View>
            </Animated.View>
        </>
    );
};
export default AccordionListItem;

