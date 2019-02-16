import {combineReducers} from 'redux'
import * as ActionType from '../../actions'

const value = (state = 0, action) => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return state + 1
        case ActionType.DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default combineReducers({
    value
})
