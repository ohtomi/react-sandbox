import * as ActionType from '../../actions'

export const switchLocale = (locale) => {
    return {
        type: ActionType.SWITCH_LOCALE,
        payload: {locale}
    }
}
