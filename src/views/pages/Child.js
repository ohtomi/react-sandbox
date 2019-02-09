import React from 'react'
import {renderRoutes} from 'react-router-config'
import {defineMessages, injectIntl} from 'react-intl'

import BasicLayout from '../templates/BasicLayout'
import BorderedLinkListPanel from '../organisms/BorderedLinkListPanel'

const messages = defineMessages({
    title: {
        id: 'views.pages.Child.title',
        defaultMessage: 'Child { id }'
    }
})

const Child = ({route, match: {params: {id}}, actions, intl: {formatMessage}}) => {
    const links = [
        {to: '/', label: 'Home'}
    ]
    return (
        <BasicLayout>
            <BorderedLinkListPanel title={formatMessage(messages.title, {id})} links={links} actions={actions}>
                {renderRoutes(route.routes)}
            </BorderedLinkListPanel>
        </BasicLayout>
    )
}

export default injectIntl(Child)
