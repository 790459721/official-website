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
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
function TopNav() {
    const [menuState, setMenuState] = useState(false)
    useEffect(() => {
        let bodyDom = document.querySelector('body')
        if(menuState) {
            bodyDom.style.height = '100vh'
            bodyDom.style.overflow = 'hidden'
        }else {
            bodyDom.style.height = 'auto'
            bodyDom.style.overflow = 'auto'
        }
    },[menuState])
    const handleMenuState = () => {
        setMenuState(!menuState)
    }
    const toDownLoad = () => {
        window.location.href = 'https://static.app.dasurebao.com/common/download.html'
    }
    const hiddenMenu = (e) => {
        if(e.target.className.includes('top_drawer_menu')) {
            setMenuState(false)
        }
    }
    return (
        <div className='top_nav_box' >
            <div className="top_nav_left">
                <div className='menu' onClick={handleMenuState}></div>
                <div className="top_logo_box">
                    <div className='logo'></div>
                    <div className="logo_slogan"></div>
                </div>
            </div>
            <button type='button' className='btn_download' onClick={toDownLoad}>下载APP</button>
            <div className={`top_drawer_menu ${menuState ? 'show_menu' : ''}`} onClick={(e) => hiddenMenu(e)}>
                <div className="drawer_menu_box" >
                    <div className="drawer_menu_top">
                        <div className="menu_logo"></div>
                        <div className="menu_slogan"></div>
                    </div>
                    <div className="menu_list">
                        <NavLink className='menu_item'activeClassName='active_link' to='/home' onClick={handleMenuState}>
                            首页
                        </NavLink>
                        <NavLink className='menu_item' activeClassName='active_link' to='/article' onClick={handleMenuState}>
                            资讯文章
                        </NavLink>
                        <NavLink className='menu_item' activeClassName='active_link' to='/insurance' onClick={handleMenuState}>
                            保险产品
                        </NavLink>
                        <NavLink className='menu_item' activeClassName='active_link' to='/service' onClick={handleMenuState}>
                            服务体系
                        </NavLink>
                        <NavLink className='menu_item' activeClassName='active_link' to='/advantage' onClick={handleMenuState}>
                            核心优势
                        </NavLink>
                        <NavLink className='menu_item' activeClassName='active_link' to='/about' onClick={handleMenuState}>
                            关于我们
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
