/*
 * @Author: your name
 * @Date: 2020-06-24 22:47:03
 * @LastEditTime: 2020-06-25 02:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\pages\Home\Home.js
 */ 
import React, { memo, useState } from 'react'
import { renderRoutes } from 'react-router-config';
import TopNav from '../../components/TopNav';
import '../../style/pages/Home.less'
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import VideoPlay from '../../components/VideoPlay';
function Home(props) {
    const { route : {routes} } = props
    return (
        <div className='home_wrapper'>
            <Slider homeImgUrlList/>
            <TopNav/>
            <SectionTitle title={'公司简介'}/>
            <VideoPlay/>
            { renderRoutes(routes)}
        </div>
    )
}
export default memo(Home)
