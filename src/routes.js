import App from './App'
import Home from './Home'
import Child from './Child'
import GrandChild from './GrandChild'

const routes = [
    {
        component: App,
        routes: [
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
    }
]

export default routes
