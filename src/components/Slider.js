import React, { useEffect, useState } from 'react'
import '../style/components/Slider.less'
import imgUrl from '../images/home_banner_1.jpg'
import Swiper from 'swiper'
class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            point: [1,2,3],
            activeIndex: 1
        }
    }
    componentDidMount() {
        const that = this
        const mySwiper = new Swiper('.slider_container',{
            loop:true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            direction : 'horizontal',
            on: {
                slideChange: function() {
                    console.log(this.activeIndex);
                    that.setState({
                        activeIndex: this.activeIndex
                    })
                }
            }
        })
    }
    render() {
        const {point, activeIndex} = this.state
        return (
            <div className="swiper-container slider_container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../images/home_banner_2.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="../images/home_banner_3.jpg" alt=""/>
                </div>
            </div>
            <div className='slider_point_box'>
                {
                    point.map((item,index) => (
                        <div key={index} className={`slider_point_item ${index + 1 === activeIndex || index + 4 === activeIndex ? 'active' : ''}`}></div>
                    ))
                }
            </div>
        </div>
        )
    }
}

export default Slider
