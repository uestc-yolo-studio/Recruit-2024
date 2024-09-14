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
                link: '/recruit/2024/frontend/tmp',
            },
            {
                text: '后端',
                link: '/recruit/2024/backend/tmp',
            },
            {
                text: 'Go',
                link: '/recruit/2024/go/tmp',
            },
            {
                text: '设计',
                link: '/recruit/2024/design/',
            },
            {
                text: '机器学习',
                link: '/recruit/2024/machine-learning/tmp',
            },
            {
                text: '操作系统',
                link: 'https://uestc-os-camp.clovy.top/#/'
            },
        ],
    },
])
