/*
 * @Author: your name
 * @Date: 2020-06-24 22:47:02
 * @LastEditTime: 2020-06-27 00:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\pages\Article\Article.js
 */
import React, { useEffect } from 'react'
import '../../style/pages/Article.less'
import { tabbarList } from '../../const/articleData'
import { useRef } from 'react'
import { useState } from 'react'
import ArticleItem from '../../components/ArticleItem'
import Footer from '../../components/Footer'
import * as listData from '../../const/articleList'
import { routeJump } from '../../utils/util.route.handle'
function Article(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [articleList, setArticleList ] = useState([])
    const [articleType, setArticelType] = useState(0)
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    useEffect(() => {
        switch (currentIndex) {
            case 0: // 公司资讯
                setArticelType(0)
                setArticleList([...listData.companyNews])
                break;
            case 1: // 投保策略
                setArticelType(1)
                setArticleList([...listData.plot])
                break;
            case 2: // 产品测评
                setArticelType(2)
                setArticleList([...listData.evaluation])
                break;
            case 3: // 理赔案例
                setArticelType(3)
                setArticleList([...listData.cases])
                break;
            case 4: // 监管动态
                setArticelType(4)
                setArticleList([...listData.trend])
                break;
            case 5: // 避坑指南
                setArticelType(5)
                setArticleList([...listData.guide])
                break;
            default:
                setArticelType(0)
                setArticleList([])
                break;
        }
    },[currentIndex,articleType])
    // 跳转
    const jumpToDetal = (articleType, articleId) => {
        routeJump(props,{
            url: '/articleDetail',
            params: {
                articleType,
                articleId,
            }
        })
    }
    const boxRef = useRef()
    // 点击tab
    const filterBarClick = (item,index) => {
        setCurrentIndex(index)
        //获取标签父元素DOM
        let contentDom =  boxRef.current;
         //获取点击时当前标签的DOM
        let valDom = contentDom.children[index];
        //计算当前标签到最左侧的宽度
        let valLeft = valDom.offsetLeft;
        //计算当前标签本身的宽度
        let valWidth = valDom.clientWidth;
        //当前标签中心点到最左侧的距离
        let valCenter = valLeft + valWidth / 2;
        //可视屏幕宽度
        let clientWidth = document.querySelector('body').offsetWidth;
        //可视屏幕中心点
        // let center = (clientWidth - 30) / 2;
        let center = clientWidth / 2;
        //计算当前标签中心点和屏幕中心点的偏移量 然后滚动相应的距离
        if (valCenter > center) {
            contentDom.scrollTo({
                left: valCenter - center,
                behavior: 'smooth'
            });
        } else {
            contentDom.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    return (
        <div className="article_wrapper">
            <div className="article_banner"></div>
            <div className="article_tabbar">
                <div className="tabbar_box" ref={boxRef}>
                    {
                        tabbarList.map((item,index) => (
                            <div key={item} className={`tabbar_item ${index === currentIndex ? 'active' : ''}`} onClick={() => filterBarClick(item,index)}>{item}</div>
                        ))
                    }
                </div>
            </div>
            <div className="article_list">
                {
                    articleList.map(item => (
                        <ArticleItem key={item.id} data={item} jumpToDetal={jumpToDetal} articleType={currentIndex}/>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Article
