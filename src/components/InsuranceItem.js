import React from 'react'
import '../style/components/InsuranceItem.less'
function InsuranceItem(props) {
    const {data} = props
    return (
        <div className="insurance_item_box">
            <img src={data.imgUrl} alt=""/>
            <div className="item_container">
                <div className="item_title">{data.title}</div>
                <div className="item_desc">{data.desc}</div>
                <div className="bottom_box">
                    <div className="left">
                        {
                            data.suitableAge && (
                                <div className="suitable_age">{data.suitableAge}</div>
                            )
                        }
                        <div className="expirate">{data.expirate}</div>
                        <div className="price">￥<span>{data.price}</span>年/起
                            </div>
                    </div>
                    <div className="right">
                        <img src={data.codeImgUrl} alt=""/>
                        <div className="code_desc">{data.codeDesc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceItem
