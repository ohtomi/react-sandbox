// @flow

import React from 'react'

type Props = {
    state: { locale: { name: string } },
    actions: {
        locale: {
            switchLocale: Function
        }
    }
}

const LocalePanel = (props: Props) => {
    return (
        <div>
            <span>Locale</span>
            <br/>
            <select
                value={props.state.locale.name}
                onChange={ev => props.actions.locale.switchLocale(ev.target.value)}
            >
                <option value="en">en</option>
                <option value="ja">ja</option>
            </select>
        </div>
    )
}

export default LocalePanel
