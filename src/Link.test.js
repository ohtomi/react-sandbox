import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Link from './Link'

test('renders Link with replace, then click', () => {
    const props = {
        replaceHistory: jest.fn(),
        pushHistory: jest.fn(),
        replace: true,
        to: '/abc'
    }
    const renderer = ReactTestRenderer.create(
        <Link {...props}/>
    )

    const instance = renderer.root
    expect(instance.findByType(Link).props.to).toBe('/abc')

    const ev = {
        preventDefault: jest.fn()
    }
    let tree = renderer.toJSON()
    tree.props.onClick(ev)

    expect(props.replaceHistory).toHaveBeenCalled()
    expect(props.pushHistory).not.toHaveBeenCalled()
    expect(ev.preventDefault).toHaveBeenCalled()
})

test('renders Link without replace, then click', () => {
    const props = {
        replaceHistory: jest.fn(),
        pushHistory: jest.fn(),
        replace: false,
        to: '/abc'
    }
    const renderer = ReactTestRenderer.create(
        <Link {...props}/>
    )

    const instance = renderer.root
    expect(instance.findByType(Link).props.to).toBe('/abc')

    const ev = {
        preventDefault: jest.fn()
    }
    let tree = renderer.toJSON()
    tree.props.onClick(ev)

    expect(props.replaceHistory).not.toHaveBeenCalled()
    expect(props.pushHistory).toHaveBeenCalled()
    expect(ev.preventDefault).toHaveBeenCalled()
})
