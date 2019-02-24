import Home from './views/pages/Home'
import Child from './views/pages/Child'
import GrandChild from './views/pages/GrandChild'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/child/:id',
        component: Child,
        routes: [
            {
                path: '/child/:id/grand-child',
                component: GrandChild
            }
        ]
    }
]

export default routes
