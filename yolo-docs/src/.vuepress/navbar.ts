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
                link: '/recruit/frontend.md',
            },
            {
                text: '后端',
                link: '/recruit/backend.md',
            },
            {
                text: 'Go',
                link: '/recruit/go.md',
            },
            {
                text: '设计',
                link: '/recruit/design.md',
            },
            {
                text: '机器学习',
                link: '/recruit/machine-leaning.md',
            },
            {
                text: '操作系统',
                link: 'https://uestc-os-camp.clovy.top/#/'
            },
        ],
    },
])
