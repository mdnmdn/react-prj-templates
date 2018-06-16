import HomePage from './container/HomePage'
import CounterPage from './container/CounterPage'

export default [

    {
        label: 'Home',
        component: HomePage,
        path: '/',
        exact: true,
        iconClass: 'fa fa-home',
    },
    {
        label: 'Counter',
        component: CounterPage,
        path: '/counter',
        exact: true,
        iconClass: 'fa fa-home',
    },
   /* {
        label: 'Login',
        component: LoginPage,
        path: '/login',
        exact: true,
        iconClass: 'fa fa-home',
    }*/
]
