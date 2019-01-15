import React from 'react'

const GrandChild = ({route, match: {params: {id}}}) => {
    return (
        <div style={{border: '1px solid', padding: '5px', margin: '3px'}}>
            Grand Child {id}
        </div>
    )
}

export default GrandChild
