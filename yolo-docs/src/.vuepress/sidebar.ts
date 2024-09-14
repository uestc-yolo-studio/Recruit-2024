import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
    '/': [

    ],
    '/recruit': [
        {
            text: '前端',
            prefix: '/recruit/',
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
        }
    ],

})
