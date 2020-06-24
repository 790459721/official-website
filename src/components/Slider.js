/*
 * @Author: your name
 * @Date: 2020-06-24 22:44:24
 * @LastEditTime: 2020-06-25 01:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\Slider.js
 */
import React, { useEffect, useState } from 'react'
import '../style/components/Slider.less'
// import imgUrl from '../images/home_banner_1.jpg'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { homeImgUrlList } from '../const/imgUrl'
class Slider extends React.Component {

    componentDidMount() {
        new Swiper('.slider_container',{
            loop:true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            direction : 'horizontal',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                bulletActiveClass: 'my-bullet-active',
              },
        })
    }
    render() {
        return (
            <div className="swiper-container slider_container">
            <div className="swiper-wrapper">
                {
                    homeImgUrlList.map((item,index) => (
                        <div className="swiper-slide" key={index}>
                            <img src={item.imgUrl} alt=""/>
                        </div>
                    ))
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
        )
    }
}
export default Slider
