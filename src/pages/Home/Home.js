import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import TopNav from '../../components/TopNav';
import '../../style/pages/Home.less'
import Slider from '../../components/Slider';
function Home(props) {
    console.log(props);
    const { route : {routes} } = props
    return (
        <div className='home_wrapper'>
            <Slider/>
            <TopNav/>
            { renderRoutes(routes)}
        </div>
    )
}
export default memo(Home)
