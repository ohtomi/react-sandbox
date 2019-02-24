import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import middleware from './middleware'
import history from './history'
import enhancer from './enhancer'
import reducers from './reducers'

const initial = {
    routing: {
        pathname: history.location.pathname,
        search: history.location.search,
        hash: history.location.search
    }
}

const logger = createLogger({
    collapsed: true
})
const store = createStore(reducers, initial, compose(applyMiddleware(middleware(history), thunk, logger), enhancer()))

export default store
