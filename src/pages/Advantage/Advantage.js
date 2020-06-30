import React, {useEffect} from 'react'
import '../../style/pages/Advantage.less'
import PartTitle from '../../components/PartTitle'
import Footer from '../../components/Footer'
function Advantage() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    return (
        <div className='advantage_wrapper'>
            <div className="advantage_banner"></div>
            <PartTitle title={'核心优势'}/>
            <div className="advantage_item_box">
                <div className="advantage_item_icon icon_1"></div>
                <div className="advantage_item_title">场景化风险解决方案</div>
                <div className="advantage_item_content">深度分析各类人群(包括但不限于各职业群体老人，小孩慢性病患者等）的风险特征和保障需求，提供场景化保险产品和风险保障方案。</div>
            </div>
            <div className="advantage_item_box">
                <div className="advantage_item_icon icon_2"></div>
                <div className="advantage_item_title">基于大数据精准营销</div>
                <div className="advantage_item_content">基于海量用户数据信息，通过大数据技术帮助保险公司以及其他行业的合作伙伴迅速搭建和完善保险数字化营销系统。</div>
            </div>
            <div className="advantage_item_box">
                <div className="advantage_item_icon icon_3"></div>
                <div className="advantage_item_title">丰富的产业资源</div>
                <div className="advantage_item_content">大树保与60余家保险公司,全国家政+护理公司6000+小型签约机构保持合作关系。</div>
            </div>
            <div className="advantage_item_box">
                <div className="advantage_item_icon icon_4"></div>
                <div className="advantage_item_title">庞大的服务网络</div>
                <div className="advantage_item_content">大树保与60余家保险公司,全国家政+护理公司6000+小型签约机构保持合作关系。</div>
            </div>
            <div className="advantage_item_box">
                <div className="advantage_item_icon icon_5"></div>
                <div className="advantage_item_title">一站式健康管理服务</div>
                <div className="advantage_item_content">大树保积极探索客户投保后的健康管理服务，长期关注客户健康，延长保险服务链,为客户提供一站式的健康管理服务。</div>
            </div>
            <div className="advantage_item_box">
                <div className="advantage_item_icon icon_6"></div>
                <div className="advantage_item_title">强大的技术支持</div>
                <div className="advantage_item_content">大树保积极探索客户投保后的健康管理服务，长期关注客户健康，延长保险服务链,为客户提供一站式的健康管理服务。</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Advantage
