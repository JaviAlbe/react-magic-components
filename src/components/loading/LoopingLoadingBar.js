import * as React from 'react'
import {Animated, View} from 'react-native'
import {useEffect, useRef, useState} from "react";

/** This loading bar has no progress */
const LoopingLoadingBar = () => {
    const [width, setWidth] = useState(0)
    //Setting the current position to -100 (out of the screen) to ensure the loop is smooth
    const currentValue = useRef(new Animated.Value(-100)).current
    const toValue = useRef(new Animated.Value(0)).current

    //The time that takes to do one loop
    useEffect(() => {
        Animated.loop(
            Animated.timing(currentValue, {
                toValue: toValue,
                duration: 2000,
                useNativeDriver: true
            }), {}
        ).start()
    }, [])

    //the width of the bar is reactive to the screen size of the device
    useEffect(() => {
        toValue.setValue(width)
    }, [width])

    return (
        <View onLayout={(event) => {
            const newWidth = event.nativeEvent.layout.width
            setWidth(newWidth)
        }}
              style={{height: 4, backgroundColor: '#bfcce4', overflow: 'hidden'}}>
            <Animated.View style={{
                height: 4,
                width: 100,
                backgroundColor: '#003594',
                overflow: 'hidden',
                transform: [{translateX: currentValue}]
            }}/>

        </View>
    )
}

export default LoopingLoadingBar