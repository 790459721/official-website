// import React from 'react'
// import { Redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Advantage from '../pages/Advantage/Advantage'
import Article from '../pages/Article/Article'
import Insurance from '../pages/Insurance/Insurance'
import Service from '../pages/Service/Service'
import About from '../pages/About/About'
const routes = [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/article',
                component: Article
            },
            {
                path: '/insurance',
                component: Insurance
            },
            {
                path: '/service',
                component: Service
            },
            {
                path: '/advantage',
                component: Advantage
            },
            {
                path: '/about',
                component: About
            }
        ]
    }
]
export default routes