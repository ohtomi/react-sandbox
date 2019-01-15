import React from 'react'
import {renderRoutes} from 'react-router-config'

import Link from './Link'

const Child = ({route, match: {params: {id}}, actions}) => {
    return (
        <div style={{border: '1px solid', padding: '5px', margin: '3px'}}>
            Child {id}
            {renderRoutes(route.routes)}
            <div>
                <Link to={'/'} {...actions.routing}>Home</Link>
            </div>
        </div>
    )
}

export default Child
