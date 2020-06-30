const nurseList = [
    {
        title: '孝心保·老年护理服务包',
        desc: '提供护理服务的老年意外险',
        suitableAge: '适用年龄：50-74周岁',
        expirate: '服务有效期：1年',
        price: 80,
        codeType:1, //小程序
        codeDesc: '微信扫码购买',
        imgUrl: require('../assets/img/xiaoxin.png'),
        codeImgUrl: require('../assets/img/code_xiaoxinbao.jpg')
    },
    {
        title: '安心保·小幸孕母婴护理险',
        desc: '母婴护理，产后康复，一张保单全搞定',
        suitableAge: '适用年龄：22-45周岁',
        expirate: '服务有效期：1年',
        price: 22000,
        codeType:1, //小程序
        codeDesc: '微信扫码购买',
        imgUrl: require('../assets/img/anxinbao.png'),
        codeImgUrl: require('../assets/img/code_anxibao.jpg')
    },
    {
        title: '安心保·好管家家务护理险',
        desc: '最高百万意外保险金，保障全面，身故',
        // suitableAge: '适用年龄：22-45周岁',
        expirate: '服务有效期：1年',
        price: 2180,
        codeType:2, //公众号
        codeDesc: '微信扫码了解',
        imgUrl: require('../assets/img/haoguanjia.png'),
        codeImgUrl: require('../assets/img/public_code.jpg')
    },

]
const  liabiList = [
    {
        title: '“家政无忧”雇主责任保险',
        desc: '全面规避家政风险，自费药也能报销',
        suitableAge: '适用年龄：18-65周岁',
        expirate: '服务有效期：1年',
        price: 20,
        codeType:2, // 公众号
        codeDesc: '微信扫码了解',
        imgUrl: require('../assets/img/jiazhengwuyou.png'),
        codeImgUrl: require('../assets/img/public_code.jpg')
    },
    {
        title: '“护理无忧”雇主责任保险',
        desc: '护理人员的专属保障，按月投保更灵活',
        suitableAge: '适用年龄：18-65周岁',
        expirate: '服务有效期：1年',
        price: 28,
        codeType:2, //公众号
        codeDesc: '微信扫码了解',
        imgUrl: require('../assets/img/huliwuyou.png'),
        codeImgUrl: require('../assets/img/public_code.jpg')
    },
]
const healthList = [
    {
        title: '平安e生保（保证续保版）',
        desc: '国民医疗险，400万保障，不限社保用药',
        suitableAge: '适用年龄：0-50周岁',
        expirate: '服务有效期：1年',
        price: 217,
        codeType:2, 
        codeDesc: '微信扫码了解',
        imgUrl: require('../assets/img/pingane.png'),
        codeImgUrl: require('../assets/img/public_code.jpg')
    },
    {
        title: '尊享e生2019',
        desc: '超过性价比，600万高额保障 ',
        suitableAge: '适用年龄：0-60周岁',
        expirate: '服务有效期：1年',
        price: 356,
        codeType:2, //公众号
        codeDesc: '微信扫码了解',
        imgUrl: require('../assets/img/zuixiange.png'),
        codeImgUrl: require('../assets/img/public_code.jpg')
    },
    {
        title: '瑞泰瑞盈重大疾病保险',
        desc: '提供100种重大疾病和50种轻症，多种保障',
        suitableAge: '适用年龄：31天-70周岁',
        expirate: '服务有效期：灵活可选',
        price: 252,
        codeType:2, //公众号
        codeDesc: '微信扫码了解',
        imgUrl: require('../assets/img/ruitai.png'),
        codeImgUrl: require('../assets/img/public_code.jpg')
    },
]
export {
    nurseList,
    liabiList,
    healthList
}