/*
 * @Author: your name
 * @Date: 2020-06-24 22:44:24
 * @LastEditTime: 2020-06-26 00:34:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\Slider.js
 */
import React, { useEffect, useState } from 'react'
import '../style/components/Slider.less'
// import imgUrl from '../images/home_banner_1.jpg'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
// import { homeImgUrlList } from '../const/imgUrl'
class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // imgList: this.props.imgList
        }
    }
    componentDidMount() {
        const { name } = this.props
        new Swiper(`.${name}`,{
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
        const { imgList, width = null, height = null, name } = this.props
        return (
            <div className={`swiper-container slider_container ${name}`} style={{height: `${height ? height + 'rem' : '4.2rem'}`}}>
            <div className="swiper-wrapper">
                {
                    imgList.map((item,index) => (
                        <div className="swiper-slide" key={index}>
                            <img src={item.imgUrl} alt="" style={{width: `${width ? width + 'rem' : '100%'}`}}/>
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
