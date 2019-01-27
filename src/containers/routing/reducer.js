import * as ActionType from '../../actions'

const initialState = {
    pathname: '/',
    search: '',
    hash: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOCATION:
            return Object.assign({}, state, {
                ...action.payload
            })
        default:
            return state
    }
}
