import React, { Fragment } from 'react'
import { getQuery } from '../../utils/util.route.handle';
import { useState } from 'react';
import { companyNewsDetail, plotDetail, evaluationDetail,casesDetail, trendDetail , guideDetail} from '../../const/articleDetailData';
import { useEffect } from 'react';
import '../../style/pages/ArticleDetail.less'
function ArticleDetail(props) {
    const params = getQuery(props.location.search)
    const [articleId] = useState(+params.articleId)
    const [articleType] = useState(+params.articleType)
    const [articleData, setArticleData] = useState({})
    const handleArticleData = (articleId, articleType) => {
        // setArticleData(companyNewsDetail[articleId])
        switch (articleType) {
            case 0: // 公司资讯
                setArticleData({ ...companyNewsDetail[articleId] })
                break;
            case 1: // 投保策略
                setArticleData({ ...plotDetail[articleId] })
                break;
            case 2: // 产品测评
                setArticleData({...evaluationDetail[articleId]})
                break;
            case 3: // 理赔案例
                setArticleData({...casesDetail[articleId]})
                break;
            case 4: // 监管动态
                setArticleData({...trendDetail[articleId]})
                break;
            case 5: // 避坑指南
                setArticleData({...guideDetail[articleId]})
                break;
            default:
                setArticleData({})
                break;
        }
    }
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    useEffect(() => {
        handleArticleData(articleId, articleType)
    }, [articleId, articleType])
    const { title, check, time, mainContent = [] } = articleData
    return (
        <div className='article_detail_wrapper'>
            <h4 className='detail_title'>{title}</h4>
            <div className="detail_check_time">
                <div className="check_num">浏览：{check}</div>
                <div className="time">时间：{time}</div>
            </div>
            {
                mainContent.length && mainContent.map((item, index) => (
                    item.type === 'p' ? (
                        <Fragment key={index}>
                            <p className='detail_p'>{item.content}</p>
                            <br />
                        </Fragment>
                    ) : item.type === 'b' ? (
                        <Fragment key={index}>
                            <p className='detail_p'><b className='detail_b'>{item.content}</b></p>
                            <br/>
                        </Fragment>
                        
                    ) : item.type === 'img' ? (
                        <Fragment key={index}>
                            <div className='detail_img_box'>
                                <img className={`detail_img ${item.lg ? 'lg_size' : ''}`} src={item.content} alt=""/>
                            </div>
                            <br/>
                        </Fragment>
                    ) : item.type === 'span' ? (
                        <Fragment key={index}>
                            <p className='detail_span'><span>{item.content}</span></p>
                            <br/>
                        </Fragment>
                    ) : item.type === 'h' ? (
                        <Fragment key={index}>
                            <h4 className='detail_h'>{item.content}</h4>
                            <br/>
                        </Fragment>
                    ) : null
                ))
            }
        </div>
    )
}
export default ArticleDetail
