import { navbar } from 'vuepress-theme-hope'

export default navbar([
    '/',
    {
        text: '2024秋招新',
        icon: 'circle-info',
        prefix: '/recruit/',
        children: [
            {
                text: '前端',
                link: '/recruit/2024/frontend/',
            },
            {
                text: '后端',
                link: '/recruit/2024/backend/',
            },
            {
                text: 'Go',
                link: '/recruit/2024/go/',
            },
            {
                text: '设计',
                link: '/recruit/2024/design/',
            },
            {
                text: '机器学习',
                link: '/recruit/2024/machine-learning/',
            },
            {
                text: '操作系统',
                link: 'https://uestc-os-camp.clovy.top/#/'
            },
        ],
    },
])
