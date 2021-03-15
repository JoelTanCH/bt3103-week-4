import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Dashboard from './components/Dashboard.vue'


export default[
    { path: '/', component:PageContent},
    { path: '/orders', component:Orders},
    { path: '/Dashboard', component:Dashboard}
    
]