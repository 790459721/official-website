/*
 * @Author: your name
 * @Date: 2020-06-24 22:47:03
 * @LastEditTime: 2020-06-26 01:47:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\pages\Home\Home.js
 */
import React,{useEffect} from 'react'
import '../../style/pages/Home.less'
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import VideoPlay from '../../components/VideoPlay';
import { homeImgUrlList, valuesImgUrlList, teamImgUrlList, partnerImgUrlList } from '../../const/imgUrl'
import Footer from '../../components/Footer';
function Home(props) {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    const navigateToAbout = () => {
        props.history.push('/about')
    }
    return (
        <div className='home_wrapper'>
            <Slider imgList={homeImgUrlList} name={'banner_container'} containerHeight={4.3} slideHeight={4.3}/>
            <SectionTitle title={'公司简介'} />
            <VideoPlay />
            <div className='section_introduction'>
                大树保，成立于2016年，是目前中国领先的护理保险智能服务平台，聚集了一批来自保险、家庭护理领域的专业人士。大树保总部位于上海，在北京、深圳、长沙等城市设有分支机构。为了响应党中央号召：高质量发展，满足人民日益增长对美好生活的需求。公司创立“健康保险与护理服务交互模式”，满足用户要保险更要健康的终极需求。
            </div>
            <br />
            <div className='section_introduction'>
                大树保旗下“大树保联盟”家政公司服务平台，是一个集门店营销、家政员管理、订单管理、专业培训认证、家政保险等多项功能于一体的综合性服务平台，为家政公司提供全方位管理功能，实现产业模式升级。目前已成功为全国近200万名家政阿姨提供意外，健康保险保障服务。
            </div>
            <div className='introduction_check_more' onClick={navigateToAbout}>查看更多详情>></div>
            <SectionTitle title={'公司使命'} />
            <div className="mission_banner">
                <div className="mission_content">
                    <div className="content_icon"></div>
                    <div className="mission_text">
                        <p>让每一位新市民</p>
                        <p>有技能、有健康、有保障</p>
                    </div>
                </div>
            </div>
            <SectionTitle title={'公司价值观'} />
            <div className="values_container">
                {
                    valuesImgUrlList.map(item => (
                        <div className="values_item" key={item.text}>
                            <img className="item_img" src={item.imgUrl} alt=''></img>
                            <p className="item_text">{item.text}</p>
                        </div>
                    ))
                }
            </div>
            <SectionTitle title={'团队风采'} />
            <div className="team_container">
                {
                    teamImgUrlList.map(item => (
                        <img key={item.imgUrl} className="item_img" src={item.imgUrl} alt=''></img>
                    ))
                }
            </div>
            <SectionTitle title={'合作伙伴'} />
            <Slider imgList={partnerImgUrlList} width={7.2} containerHeight={5.6} name={'partner_container'} />
            <div className="partner_link_container">
                <div className="partner_link">
                    <div className="link_icon"></div>
                    <p className="link_text">依托大数据 </p>
                    <p className="link_text">大数据更精准</p>
                </div>
                <div className="link_split"></div>
                <div className="partner_link">
                    <div className="link_icon"></div>
                    <p className="link_text">内部有私云 </p>
                    <p className="link_text">运作更稳健</p>
                </div>
                <div className="link_split"></div>
                <div className="partner_link">
                    <div className="link_icon"></div>
                    <p className="link_text">人工智能AI</p>
                    <p className="link_text">流程更便捷</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home
