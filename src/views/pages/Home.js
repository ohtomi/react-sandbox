import React from 'react'

import Link from '../atoms/Link'

const Home = ({route, actions}) => {
    return (
        <div style={{border: '1px solid', padding: '3px', margin: '3px'}}>
            Home
            <div>
                <Link to={'/child/1'} {...actions.routing}>child 1</Link>
                {' | '}
                <Link to={'/child/1/grand-child'} {...actions.routing}>grand child 1</Link>
                {' | '}
                <Link to={'/child/2'} {...actions.routing}>child 2</Link>
                {' | '}
                <Link to={'/child/2/grand-child'} {...actions.routing}>grand child 2</Link>
                {' | '}
                <Link to={'/child/3'} {...actions.routing}>child 3</Link>
                {' | '}
                <Link to={'/child/3/grand-child'} {...actions.routing}>grand child 3</Link>
            </div>
        </div>
    )
}

export default Home
