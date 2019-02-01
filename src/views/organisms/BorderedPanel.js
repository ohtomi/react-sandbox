// @flow

import React from 'react'

type Props = {
    title: string,
    children?: any
}

const BorderedPanel = (props: Props) => {
    return (
        <div style={{border: '1px solid', padding: '5px', margin: '3px'}}>
            {props.title}
            {props.children}
        </div>
    )
}

export default BorderedPanel
