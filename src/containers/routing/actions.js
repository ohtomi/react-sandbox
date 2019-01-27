import * as ActionType from '../../actions'

export const pushHistory = (href) => {
    return {
        type: ActionType.PUSH_HISTORY,
        payload: {href}
    }
}

export const replaceHistory = (href) => {
    return {
        type: ActionType.REPLACE_HISTORY,
        payload: {href}
    }
}

export const goTo = (index) => {
    return {
        type: ActionType.GO_TO,
        payload: {index}
    }
}

export const goBack = () => {
    return {
        type: ActionType.GO_BACK
    }
}

export const goForward = () => {
    return {
        type: ActionType.GO_FORWARD
    }
}

export const changeLocation = ({pathname, search, hash}) => {
    return {
        type: ActionType.CHANGE_LOCATION,
        payload: {pathname, search, hash}
    }
}
