// @flow

import React from 'react'

import type {LinkProps} from '../atoms/Link'
import LinkList from '../molecules/LinkList'

type Props = {
    title: string,
    links: Array<LinkProps>,
    actions: {
        routing: {
            replaceHistory?: Function,
            pushHistory?: Function
        }
    },
    children?: any
}

const BorderedLinkListPanel = (props: Props) => {
    return (
        <div style={{border: '1px solid', padding: '5px', margin: '3px'}}>
            {props.title}
            {props.children}
            <LinkList links={props.links} actions={props.actions}/>
        </div>
    )
}

export default BorderedLinkListPanel
