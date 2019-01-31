// @flow

import React from 'react'

export type LinkProps = {
    replace?: boolean,
    to: string,
    label: string
}

type Props = {
    replaceHistory?: Function,
    pushHistory?: Function,
    replace?: boolean,
    to: string,
    children?: any
}

const Link = (props: Props) => {
    const onClick = (ev) => {
        ev.preventDefault()
        if (props.replace && props.replaceHistory) {
            props.replaceHistory(props.to)
        } else if (props.pushHistory) {
            props.pushHistory(props.to)
        }
    }
    return (
        <button onClick={onClick}>
            {props.children}
        </button>
    )
}

export default Link
