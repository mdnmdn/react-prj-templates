import { connect } from 'react-redux';

import HomePage from './container/HomePage'
import CounterPage from './container/CounterPage'
import LoginPage from './container/LoginPage';


const routes = (authorized = true) => [

    {
        label: 'Home',
        component: HomePage,
        path: '/',
        exact: true,
        iconClass: 'fa fa-home',
        showInMenu: true,        
    },    
    {
        label: 'Counter',
        component: CounterPage,
        path: '/counter',
        exact: true,
        iconClass: 'fa fa-home',
        showInMenu: true,        
    },
    {
        label: 'Private',
        component: HomePage,
        path: '/',
        exact: true,
        iconClass: 'fa fa-home',
        showInMenu: true,
        authorized: authorized,
    },
    {
        label: 'login',
        component: LoginPage,
        path: '/login',
        exact: true,
        iconClass: 'fa fa-home',
        showInMenu: true,
    },
   /* {
        label: 'Login',
        component: LoginPage,
        path: '/login',
        exact: true,
        iconClass: 'fa fa-home',
    }*/
];

export default routes;
