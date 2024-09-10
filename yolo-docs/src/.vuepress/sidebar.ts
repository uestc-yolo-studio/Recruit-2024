import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
    '/': [

    ],
    '/recruit': [
        {
            text: '前端',
            prefix: '/recruit/',
            link: '/recruit/frontend.md',
        },
        {
            text: '后端',
            link: '/recruit/backend/backend.md',
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
        }
    ],

})
