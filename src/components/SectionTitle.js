/*
 * @Author: your name
 * @Date: 2020-06-25 02:10:52
 * @LastEditTime: 2020-06-25 02:18:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\SectionTitle.js
 */ 
import React from 'react'
import '../style/components/SectionTitle.less'
function SectionTitle(props) {
    const {title} = props
    return (
        <div className='section_title_box'>
            <h5>{title || 'test'}</h5>
            <div className='underline'></div>
        </div>
    )
}

export default SectionTitle
