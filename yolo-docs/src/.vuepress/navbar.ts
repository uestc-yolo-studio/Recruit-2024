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
                link: '/recruit/frontend/frontend.md',
            },
            {
                text: '后端',
                link: '/recruit/backend/backend.md',
            },
            {
                text: 'Go',
                link: '/recruit/go/go.md',
            },
            {
                text: '设计',
                link: '/recruit/design/design.md',
            },
            {
                text: '机器学习',
                link: '/recruit/machine-learning/machine-learning.md',
            },
            {
                text: '操作系统',
                link: 'https://uestc-os-camp.clovy.top/#/'
            },
        ],
    },
])
