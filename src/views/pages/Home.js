import React from 'react'

import BasicLayout from '../templates/BasicLayout'
import BorderedLinkListPanel from '../organisms/BorderedLinkListPanel'

const Home = ({route, actions}) => {
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
            <BorderedLinkListPanel title={'Home'} links={links} actions={actions}/>
        </BasicLayout>
    )
}

export default Home
