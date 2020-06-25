/*
 * @Author: your name
 * @Date: 2020-06-24 22:47:03
 * @LastEditTime: 2020-06-25 03:38:46
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
            <div>
            大树保，成立于2016年，是目前中国领先的护理保险智能服务平台，聚集了一批来自保险、家庭护理领域的专业人士。大树保总部位于上海，在北京、深圳、长沙等城市设有分支机构。
            </div>
            { renderRoutes(routes)}
        </div>
    )
}
export default memo(Home)
