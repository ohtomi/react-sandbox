import {combineReducers} from 'redux'

import routing from './containers/routing/reducer'
import counter from './containers/counter/reducer'

export default combineReducers({
    routing,
    counter
})
