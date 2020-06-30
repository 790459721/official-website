import React from 'react'
import '../style/components/PartTitle.less'
function PartTitle(props) {
    const {title} = props
    return (
        <div className='part_title_container'>
            <div className="part_title_split"></div>
            <div className="part_title">{title}</div>
            <div className="part_title_split"></div>
        </div>
    )
}

export default PartTitle
