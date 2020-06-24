/*
 * @Author: your name
 * @Date: 2020-06-25 02:25:21
 * @LastEditTime: 2020-06-25 02:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\VideoPlay.js
 */ 
import React from 'react'
import videoUrl from '../assets/video/xuanchuanpian.mp4'
function VideoPlay() {
    return (
        <div>
            <video src={require('../assets/video/xuanchuanpian.mp4')}></video>
        </div>
    )
}

export default VideoPlay
