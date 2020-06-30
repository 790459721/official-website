import React, { useState, useEffect } from 'react'
import '../../style/pages/Insurance.less'
import { nurseList, healthList, liabiList } from '../../const/insuranceList'
import InsuranceItem from '../../components/InsuranceItem'
function Insurance() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [productsList, setProductsList] = useState([])
    const [tabList] = useState(['护理保险', '雇主责任险', '健康险'])
    const setActive = (index) => {
        setCurrentIndex(index)
    }
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    useEffect(() => {
        switch (currentIndex) {
            case 0: // 护理保险
                setProductsList([...nurseList])
                break;
            case 1: // 雇主责任险
                setProductsList([...liabiList])
                break;
            case 2: // 健康险
                setProductsList([...healthList])
                break;
            default:
                setProductsList([])
                break;
        }
    }, [currentIndex])
    return (
        <div className="insurance_wrapper">
            <div className="insurance_banner"></div>
            <div className="insurance_tabbar_box">
                <div className="item_box">
                    {
                        tabList.map((item, index) => (
                            <div key={index} className={`tabbar_item ${currentIndex === index ? 'active' : ''} `} onClick={() => setActive(index)}>{item}</div>
                        ))
                    }
                </div>
                {
                    productsList.map((item, index) => (
                        <InsuranceItem key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Insurance
