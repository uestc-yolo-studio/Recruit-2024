import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
    '/': [

    ],
    '/recruit': [
        {
            text: '前端',
            prefix: '/recruit/',
            link: '/recruit/frontend/frontend',
        },
        {
            text: '后端',
            link: '/recruit/backend/backend',
        },
        {
            text: 'Go',
            link: '/recruit/go',
        },
        {
            text: '设计',
            link: '/recruit/design',
        },
        {
            text: '机器学习',
            link: '/recruit/machine-leaning/machine-leaning',
        }
    ],

})
