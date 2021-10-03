import { lazy } from 'react'
import Icon from '@/components/icon'
const Member = lazy(() => import('@/views/main/member'))
const MemberColumn = lazy(() => import('@/views/main/member/column'))
const MemberRow = lazy(() => import('@/views/main/member/row'))
const MemberDetail = lazy(() => import('@/views/main/member/detail'))
const SubMain = lazy(() => import('@/views/main/subMain'))
const Personal = lazy(() => import('@/views/main/personal'))
const Setting = lazy(() => import('@/views/main/personal/setting'))
const LoginComponent = lazy(() => import('@/views/login'))
const RegisterComponent = lazy(() => import('@/views/register'))
const MainComponent = lazy(() => import('@/views/main'))
const ErrorComponent = lazy(() => import('@/views/error'))

/**
 * 需求說明: 需有token才能使用私有路由，私有路由內又分需要最高權限才能使用該路由
 */

const routes = [
    {
        path: '/404',
        exact: true,
        component: ErrorComponent,
    },
    {
        path: '/register',
        component: RegisterComponent,
    },
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/',
        component: MainComponent,
        routes: [
            {
                path: '/',
                exact: true,
                component: SubMain,
            },
            {
                path: '/personal',
                needAuth: true,
                component: Personal,
                name: '個人資訊管理',
                routes: [
                    {
                        path: '/setting',
                        needAuth: true,
                        exact: true,
                        component: Setting,
                        name: '帳戶設定',
                    },
                ],
                icon: <Icon src={'/image/person.png'} />,
            },
            {
                path: '/member',
                needAuth: true,
                component: Member,
                name: '會員管理',
                routes: [
                    {
                        path: '/column',
                        needAuth: true,
                        exact: true,
                        component: MemberColumn,
                        name: '列表式',
                    },
                    {
                        path: '/row',
                        needAuth: true,
                        exact: true,
                        component: MemberRow,
                        name: '表格式',
                    },
                    {
                        path: '/detail',
                        needAuth: true,
                        exact: true,
                        hidden: true,
                        component: MemberDetail,
                        name: '會員詳細',
                    },
                ],
                icon: <Icon src={'/image/member.png'} />,
            },
            {
                path: '/404',
                redirect: true,
            },
        ],
    },
]

export default routes
