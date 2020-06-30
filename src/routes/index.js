/*
 * @Author: your name
 * @Date: 2020-06-24 22:44:56
 * @LastEditTime: 2020-06-25 22:36:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\routes\index.js
 */ 
import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
// import Home from '../pages/Home/Home'
// import Advantage from '../pages/Advantage/Advantage'
// import Article from '../pages/Article/Article'
// import Insurance from '../pages/Insurance/Insurance'
// import Service from '../pages/Service/Service'
// import About from '../pages/About/About'
// import ArticleDetail from '../pages/ArticleDetail/ArticleDetail'
import Base from '../pages/Base/Base'
const HomePage = lazy(() => import('../pages/Home/Home'))
const AdvantagePage = lazy(() => import('../pages/Advantage/Advantage'))
const ArticlePage = lazy(() => import('../pages/Article/Article'))
const InsurancePage = lazy(() => import('../pages/Insurance/Insurance'))
const ServicePage = lazy(() => import('../pages/Service/Service'))
const ArticleDetailPage = lazy(() => import('../pages/ArticleDetail/ArticleDetail'))
const AboutPage = lazy(() => import('../pages/About/About'))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

const routes = [
    {
        path: '/',
        component: Base,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                  <Redirect to={"/home"}/>
                )
            },
            {
                path: '/article',
                component: SuspenseComponent(ArticlePage)
            },
            {
                path: '/home',
                component: SuspenseComponent(HomePage)
            },
            {
                path: '/insurance',
                component: SuspenseComponent(InsurancePage)
            },
            {
                path: '/service',
                component: SuspenseComponent(ServicePage)
            },
            {
                path: '/advantage',
                component: SuspenseComponent(AdvantagePage)
            },
            {
                path: '/about',
                component: SuspenseComponent(AboutPage)
            },
            {
                path: '/articleDetail',
                component: SuspenseComponent(ArticleDetailPage)
            },

        ]
    }
]
export default routes