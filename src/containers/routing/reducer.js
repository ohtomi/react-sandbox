import {combineReducers} from 'redux'
import * as ActionType from '../../actions'

const pathname = (state = '/', action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOCATION:
            return action.payload.pathname
        default:
            return state
    }
}

const search = (state = '', action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOCATION:
            return action.payload.search
        default:
            return state
    }
}

const hash = (state = '', action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOCATION:
            return action.payload.hash
        default:
            return state
    }
}

export default combineReducers({
    pathname,
    search,
    hash
})
