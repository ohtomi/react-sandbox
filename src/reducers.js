import {combineReducers} from 'redux'

import locale from './containers/locale/reducer'
import routing from './containers/routing/reducer'
import counter from './containers/counter/reducer'

export default combineReducers({
    locale,
    routing,
    counter
})
