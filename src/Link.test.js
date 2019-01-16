import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Link from './Link'

it('renders Link', () => {
    const renderer = ReactTestRenderer.create(
        <Link to={'/abc'}/>
    )
    const instance = renderer.root
    expect(instance.findByType(Link).props.to).toBe('/abc')
})
