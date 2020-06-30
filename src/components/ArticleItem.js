/*
 * @Author: your name
 * @Date: 2020-06-26 21:42:40
 * @LastEditTime: 2020-06-26 23:55:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\ArticleItem.js
 */ 
import React from 'react'
import '../style/components/ArticleItem.less'
function ArticleItem(props) {
    const { data, jumpToDetal, articleType } = props
    return (
        <div className="article_item_box" onClick={() => jumpToDetal(articleType, data.id)}>
            <img src={data.imageUrl} className="item_left_img" alt=''></img>
            <div className="item_right_info">
                <div className="info_title">{data.title}</div>
                <div className="info_check_time">
                    <div className="info_check">
                        <span>浏览：</span>
                        <span>{data.check}</span>
                    </div>
                    <div className="info_titme">
                        <span>时间：</span>
                        <span>{data.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem
