import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
    '/': [

    ],
    '/recruit': [
        {
            text: '前端',
            prefix: '/recruit/',
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
        }
    ],

})
