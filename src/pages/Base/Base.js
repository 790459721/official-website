/*
 * @Author: your name
 * @Date: 2020-06-25 22:22:38
 * @LastEditTime: 2020-06-25 22:43:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\pages\Base\Base.js
 */ 
import React from 'react'
import { renderRoutes } from 'react-router-config'
import TopNav from '../../components/TopNav'
import '../../style/pages/Base.less'
function Base(props) {
    const { route : {routes} } = props
    return (
        <div className='base_wrapper'>
            <TopNav/>
            { renderRoutes(routes)}
        </div>
    )
}

export default Base
