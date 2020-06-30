import React from 'react'
import '../../style/pages/About.less'
import PartTitle from '../../components/PartTitle'
import Slider from '../../components/Slider'
import { gloryList, propertyList } from '../../const/imgUrl'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
// import { homeImgUrlList, valuesImgUrlList, teamImgUrlList, partnerImgUrlList } from '../../const/imgUrl'
function About() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    return (
        <div className='about_wrapper'>
            <div className="about_banner"></div>
            <PartTitle title={'关于我们'} />
            <div className='about_content_txt'>
                <p>大树保，成立于2016年，是目前中国领先的护理保险智能服务平台，聚集了一批来自保险、家庭护理领域的专业人士。大树保总部位于上海，在北京、深圳、长沙等城市设有分支机构。为了响应党中央号召：高质量发展，满足人民日益增长对美好生活的需求。公司创立“健康保险与护理服务交互模式”，满足用户要保险更要健康的终极需求。</p><br />
                <p>大树保旗下“大树保联盟”家政公司服务平台，是一个集门店营销、家政员管理、订单管理、专业培训认证、家政保险等多项功能于一体的综合性服务平台，为家政公司提供全方位管理功能，实现产业模式升级。目前已成功为全国近200万名家政阿姨提供意外，健康保险保障服务。</p><br />
                <p> 大树保旗下“大树保健康”进家式护理服务平台，汇集多方医疗专家，开发出膳食营养、健康风险评估等专业培训课程，结合大树保独立开发的云端评估工具，赋能20万+服务人员，形成覆盖全国17个省89个市的服务网络。</p><br />
                <p>“ 让每一位新市民有技能、有健康、有保障。”是大树保一直坚持的初心和使命。</p>
            </div>
            <PartTitle title={'资质荣耀'} />
            <Slider imgList={gloryList} name={'about_gloryList_container'} slideHeight={3} containerHeight={3.5} />
            <PartTitle title={'知识产权'} />
            <Slider imgList={propertyList} name={'about_property_container'} slideHeight={3} containerHeight={3.7} />
            <PartTitle title={'联系我们'} />
            <div className="about_map_box">
            </div>
            <Footer />
        </div>
    )
}

export default About
