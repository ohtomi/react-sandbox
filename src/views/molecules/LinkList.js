// @flow

import React from 'react'

import type {LinkProps} from '../atoms/Link'
import Link from '../atoms/Link'

type Props = {
    links: Array<LinkProps>,
    actions: {
        routing: {
            replaceHistory?: Function,
            pushHistory?: Function
        }
    }
}

const LinkList = (props: Props) => {
    return (
        <div>
            {props.links.map((link: LinkProps, index: number) => (
                <React.Fragment key={index}>
                    <Link replace={link.replace} to={link.to}
                          replaceHistory={props.actions.routing.replaceHistory}
                          pushHistory={props.actions.routing.pushHistory}>
                        {link.label}
                    </Link>
                    {index !== props.links.length - 1 ? ' | ' : ''}
                </React.Fragment>
            ))}
        </div>
    )
}

export default LinkList
