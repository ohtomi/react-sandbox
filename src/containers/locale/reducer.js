import {combineReducers} from 'redux'
import * as ActionType from '../../actions'

const name = (state = 'en', action) => {
    switch (action.type) {
        case ActionType.SWITCH_LOCALE:
            return action.payload.locale
        default:
            return state
    }
}

export default combineReducers({
    name
})
