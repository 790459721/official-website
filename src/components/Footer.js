/*
 * @Author: your name
 * @Date: 2020-06-26 01:38:31
 * @LastEditTime: 2020-06-26 01:42:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\components\Footer.js
 */ 
import React from 'react'
import publicCodeImg from '../assets/img/public_code.jpg'
import lianmengCodeImg from '../assets/img/lianmeng_app_code.png'
import healthCodeImg from '../assets/img/health_app_code.png'
import '../style/components/Footer.less'
function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_split"></div>
            <h3 className="lable_title">资质信息</h3>
            <div className="quality_info">
                <p>保险销售许可：善康禾诺保险经纪有限公司</p>
                <p>(保险经纪业务许可证：269667000000800)</p>
                <p>上海大黍保信息技术有限公司</p>
                <p>Copyright2016-2020 www.dasurebao.com All Rights Reserved</p>
            </div>
            <h3 className="lable_title">联系我们</h3>
            <div className="address_info">
                <p>服务时间：周一至周五 9:00-18:00</p>
                <p>客服邮箱：kefu@dasurebao.com</p>
                <p>客服电话：400-099-6778</p>
                <p>地&emsp;&emsp;&ensp;址：上海市浦东新区亮秀路112号Y1座505室</p>
            </div>
            <div className="public_code_container">
                <div className="code_box">
                    <img className="code_img" src={publicCodeImg} alt=''></img>
                    <div className="code_text">大树保公众号</div>
                </div>
                <div className="code_box">
                    <img className="code_img" src={lianmengCodeImg} alt=''></img>
                    <div className="code_text">大树保联盟APP</div>
                </div>
                <div className="code_box">
                    <img className="code_img" src={healthCodeImg} alt=''></img>
                    <div className="code_text">大树保健康APP</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
