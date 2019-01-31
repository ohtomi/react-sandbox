import React from 'react'

import LinkList from '../molecules/LinkList'
import BasicLayout from '../templates/BasicLayout'

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
            <div style={{border: '1px solid', padding: '3px', margin: '3px'}}>
                Home
                <LinkList links={links} actions={actions}/>
            </div>
        </BasicLayout>
    )
}

export default Home
