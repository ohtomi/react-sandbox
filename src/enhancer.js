import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import {createMiddleware} from './middleware'
import history from './history'

const logger = createLogger({
    collapsed: true
})

const enhancer = compose(applyMiddleware(createMiddleware(history), thunk, logger))

export default enhancer
