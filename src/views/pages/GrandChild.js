import React from 'react'
import {defineMessages, injectIntl} from 'react-intl'

import BorderedPanel from '../organisms/BorderedPanel'

const messages = defineMessages({
    title: {
        id: 'views.pages.GrandChild.title',
        defaultMessage: 'Grand Child { id }'
    }
})

const GrandChild = ({route, match: {params: {id}}, intl: {formatMessage}}) => {
    return (
        <BorderedPanel title={formatMessage(messages.title, {id})}/>
    )
}

export default injectIntl(GrandChild)
