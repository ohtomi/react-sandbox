import React from 'react'

import BorderedPanel from '../organisms/BorderedPanel'

const GrandChild = ({route, match: {params: {id}}}) => {
    return (
        <BorderedPanel title={`Grand Child ${id}`}/>
    )
}

export default GrandChild
