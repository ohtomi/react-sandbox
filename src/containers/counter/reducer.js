import {combineReducers} from 'redux'
import * as ActionType from '../../actions'

const initialState = {
    value: 0
}

const value = (state = initialState.value, action) => {
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
