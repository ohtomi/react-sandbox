import React from 'react'
import {renderRoutes} from 'react-router-config'

import LinkList from '../molecules/LinkList'
import BasicLayout from '../templates/BasicLayout'

const Child = ({route, match: {params: {id}}, actions}) => {
    const links = [
        {to: '/', label: 'Home'}
    ]
    return (
        <BasicLayout>
            <div style={{border: '1px solid', padding: '5px', margin: '3px'}}>
                Child {id}
                {renderRoutes(route.routes)}
                <LinkList links={links} actions={actions}/>
            </div>
        </BasicLayout>
    )
}

export default Child
