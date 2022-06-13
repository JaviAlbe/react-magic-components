import * as React from 'react'
import {View} from 'react-native'
import {useEffect, useState} from "react";

const ProgressLoadingBar = (props) => {
    const [width, setWidth] = useState(0)
    const [progress, setProgress] = useState(-1000)

    useEffect(() => {
        setProgress(-width + (width * props.currentProgress) / props.totalProgress)
    }, [props.currentProgress, width])

    return (

        <View onLayout={(event) => {
            const newWidth = event.nativeEvent.layout.width
            setWidth(newWidth)
        }} style={{
            height: 4,
            backgroundColor: '#bfcce4',
            overflow: 'hidden'
        }}>

            <View style={{
                height: 4,
                width: '100%',
                backgroundColor: '#003594',
                overflow: 'hidden',
                transform: [{translateX: progress}]
            }}>

            </View>
        </View>

    )
}

export default ProgressLoadingBar