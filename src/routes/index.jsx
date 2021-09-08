import { lazy } from 'react'
import NewsComponent from '@/views/main/news'
import SubMainComponent from '@/views/main/subMain'
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
        exact: true,
        needAuth: true,
        component: () => (
            <MainComponent>
                <SubMainComponent />
            </MainComponent>
        ),
    },
    {
        path: '/news',
        needAuth: true,
        component: () => (
            <MainComponent>
                <NewsComponent />
            </MainComponent>
        ),
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
        component: ErrorComponent,
    },
]

const routes = [...publicRoutes]

export default routes
