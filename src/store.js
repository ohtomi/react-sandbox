import {createStore} from 'redux'

import reducers from './reducers'
import preloadedState from './preloadedState'
import enhancer from './enhancer'

const store = createStore(reducers, preloadedState, enhancer)

export default store
