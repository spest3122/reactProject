import { lazy } from 'react'
import NewsComponent from '@/views/main/news'
import SubMainComponent from '@/views/main/subMain'
const LoginComponent = lazy(() => import('@/views/login'))
const RegisterComponent = lazy(() => import('@/views/register'))
const MainComponent = lazy(() => import('@/views/main'))
const ErrorComponent = lazy(() => import('@/views/error'))

const routes = [
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

export default routes
