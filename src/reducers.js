import {combineReducers} from 'redux'

import locale from './containers/locale/reducer'
import routing from './containers/routing/reducer'
import counter from './containers/counter/reducer'

const reducers = combineReducers({
    locale,
    routing,
    counter
})

export default reducers
