import React from 'react'
import {renderRoutes} from 'react-router-config'

import BasicLayout from '../templates/BasicLayout'
import BorderedLinkListPanel from '../organisms/BorderedLinkListPanel'

const Child = ({route, match: {params: {id}}, actions}) => {
    const links = [
        {to: '/', label: 'Home'}
    ]
    return (
        <BasicLayout>
            <BorderedLinkListPanel title={`Child ${id}`} links={links} actions={actions}>
                {renderRoutes(route.routes)}
            </BorderedLinkListPanel>
        </BasicLayout>
    )
}

export default Child
