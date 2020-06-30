/*
 * @Author: your name
 * @Date: 2020-06-25 02:25:21
 * @LastEditTime: 2020-06-25 15:07:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\VideoPlay.js
 */
import React, { Component } from 'react'
import videoUrl from '../assets/video/xuanchuanpian.mp4'
import '../style/components/VidoePlay.less'
class VideoPlay extends Component {
    componentDidMount() {
        // document.addEventListener("WeixinJSBridgeReady",function() { 
        //     document.getElementById('play_vidoe').play(); 
        // }, false);
    }
    render() {
        return (
            <div className='video_box'>
                <video className='video_play'
                    controls
                    playsInline
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    x-webkit-airplay="allow"
                    id='play_vidoe'
                    poster={require('../assets/img/video_poster.jpeg')}
                >
                    <source src={videoUrl} />
                </video>
            </div>
        )
    }
}
export default VideoPlay
