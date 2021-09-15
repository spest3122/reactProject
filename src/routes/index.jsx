import { lazy } from 'react'
import Member from '@/views/main/member'
import SubMain from '@/views/main/subMain'
import Personal from '@/views/main/personal'
import Setting from '@/views/main/personal/setting'
import Icon from '@/components/icon'
const LoginComponent = lazy(() => import('@/views/login'))
const RegisterComponent = lazy(() => import('@/views/register'))
const MainComponent = lazy(() => import('@/views/main'))
const ErrorComponent = lazy(() => import('@/views/error'))

/**
 * 需求說明: 需有token才能使用私有路由，私有路由內又分需要最高權限才能使用該路由
 */

//私有路由
const privateRoutes = [
    {
        path: '/',
        needAuth: true,
        component: MainComponent,
        routes: [
            {
                path: '/personal',
                needAuth: true,
                component: Personal,
                name: '個人資訊管理',
                routes: [
                    {
                        path: '/setting',
                        needAuth: true,
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
                icon: <Icon src={'/image/member.png'} />,
            },
        ],
    },
]

//公有路由
const publicRoutes = [
    {
        path: '/register',
        component: RegisterComponent,
    },
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '*',
        exact: true,
        component: ErrorComponent,
    },
]

const routes = [...privateRoutes, ...publicRoutes]

export default routes
