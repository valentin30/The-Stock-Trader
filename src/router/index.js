import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Portfolio from '../views/Portfolio'
import Stocks from '../views/Stocks'


Vue.use(VueRouter)

const StocksList = () => import('../components/Stocks/StocksList')
const StockItem = () => import('../components/Stocks/StockItem')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/stocks',
        component: Stocks,
        children:[
            {path:'', name: 'StocksList', component: StocksList},
            {path:':name', name: 'Stock', component: StockItem}
        ]
    },
    {
        path:'*', redirect:'/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
