import React from 'react'
import {defineMessages, injectIntl} from 'react-intl'

import BasicLayout from '../templates/BasicLayout'
import BorderedLinkListPanel from '../organisms/BorderedLinkListPanel'
import CounterPanel from '../organisms/CounterPanel'
import LocalePanel from '../organisms/LocalePanel'

const messages = defineMessages({
    title: {
        id: 'views.pages.Home.title',
        defaultMessage: 'Home'
    }
})

const Home = ({route, state, actions, intl: {formatMessage}}) => {
    const links = [
        {to: '/child/1', label: 'child 1'},
        {to: '/child/1/grand-child', label: 'grand child 1'},
        {to: '/child/2', label: 'child 2'},
        {to: '/child/2/grand-child', label: 'grand child 2'},
        {to: '/child/3', label: 'child 3'},
        {to: '/child/3/grand-child', label: 'grand child 3'}
    ]
    return (
        <BasicLayout>
            <BorderedLinkListPanel title={formatMessage(messages.title)} links={links} actions={actions}/>
            <CounterPanel state={state} actions={actions}/>
            <LocalePanel state={state} actions={actions}/>
        </BasicLayout>
    )
}

export default injectIntl(Home)
