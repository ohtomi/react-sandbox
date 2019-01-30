import React from 'react'
import {renderRoutes} from 'react-router-config'

import Link from '../atoms/Link'
import BasicLayout from '../templates/BasicLayout'

const Child = ({route, match: {params: {id}}, actions}) => {
    return (
        <BasicLayout>
            <div style={{border: '1px solid', padding: '5px', margin: '3px'}}>
                Child {id}
                {renderRoutes(route.routes)}
                <div>
                    <Link to={'/'} {...actions.routing}>Home</Link>
                </div>
            </div>
        </BasicLayout>
    )
}

export default Child
