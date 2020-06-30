import React, {useEffect} from 'react'
import '../../style/pages/Service.less'
import PartTitle from '../../components/PartTitle'
import Footer from '../../components/Footer'
function Service() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    return (
        <div className='service_wrapper'>
            <div className="service_banner"></div>
            <PartTitle title={'服务体系'} />
            <div className="service_img_box">
                <div className="box_img"></div>
            </div>
            <div className="platform_title liamneg">
                <div className="title_txt">大树保联盟</div>
                <div className="title_end_icon"></div>
            </div>
            <div className="platform_desc_list">
                <div className="desc_item">阿姨信息标签化管理，一键匹配，满足用户需求。</div>
                <div className="desc_item">销售订单进度随时跟踪，一目了然，满足日常经营。</div>
                <div className="desc_item">营销好文自由选择，一键转发，提高销售业绩。</div>
                <div className="desc_item">家政公司通过使用大树保联盟APP，轻松满足日常经营所需的管理工作，还可为旗下家政人员提供家政保险保障、专业培训认证等增值服务。</div>
                <div className="desc_item">大树保联盟目前已成功为全国近200万名家政 阿姨提供意外、健康保险保障服务。</div>
            </div>
            <div className="service_img_box">
                <div className="box_img box_img2"></div>
            </div>
            <div className="platform_title jiankang">
                <div className="title_txt">大树保健康</div>
                <div className="title_end_icon"></div>
            </div>
            <div className="platform_desc_list sec_list">
                <div className="desc_item">大树保健康是进家式护理服务平台。经人社认 证的健康风险评估师，通过大树保独立开发的 云端风险评估工具，为客户提供风险评估，出具风险评估报告。</div>
                <div className="desc_item">四千余名医护人员以及20万+家政护理人员通 过大树保健康平台获得高质量的培训服务后， 提供人伤查勘、健康照护等订单服务。</div>
                <div className="desc_item">经多年经营沉淀，大树保已与全国多个机构合 作，集合820家医院资源（其中117家为三甲 医院）形成线下服务网络，已覆盖全国17个省， 89个市。</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Service
