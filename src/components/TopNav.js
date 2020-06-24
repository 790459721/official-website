/*
 * @Author: your name
 * @Date: 2020-06-24 22:44:25
 * @LastEditTime: 2020-06-25 02:04:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\TopNav.js
 */ 
import React from 'react'
import '../style/components/TopNav.less'
function TopNav() {
    return (
        <div className='top_nav_box' >
            <div className="top_nav_left">
                <div className='menu'></div>
                <div className="top_logo_box">
                    <div className='logo'></div>
                    <div className="logo_slogan"></div>
                </div>
            </div>
            <button type='button' className='btn_download'>下载APP</button>
        </div>
    )
}

export default TopNav
