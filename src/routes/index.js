/*
 * @Author: your name
 * @Date: 2020-06-24 22:44:56
 * @LastEditTime: 2020-06-25 22:36:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website\src\routes\index.js
 */ 
import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Advantage from '../pages/Advantage/Advantage'
import Article from '../pages/Article/Article'
import Insurance from '../pages/Insurance/Insurance'
import Service from '../pages/Service/Service'
import About from '../pages/About/About'
import Base from '../pages/Base/Base'
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
                component: Article
            },
            {
                path: '/home',
                component: Home
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