import reducer from './reducer'
import * as actions from './actions'

describe('pathname', () => {
    test('initial state', () => {
        const got = reducer(undefined, {type: '@@INIT'})
        expect(got).toHaveProperty('pathname', '/')
    })
    test('change location', () => {
        const got = reducer(undefined, actions.changeLocation({pathname: '/foo'}))
        expect(got.pathname).toBe('/foo')
    })
})

describe('search', () => {
    test('initial state', () => {
        const got = reducer(undefined, {type: '@@INIT'})
        expect(got).toHaveProperty('search', '')
    })
    test('change location', () => {
        const got = reducer(undefined, actions.changeLocation({search: 'bar'}))
        expect(got.search).toBe('bar')
    })
})

describe('hash', () => {
    test('initial state', () => {
        const got = reducer(undefined, {type: '@@INIT'})
        expect(got).toHaveProperty('hash', '')
    })
    test('change location', () => {
        const got = reducer(undefined, actions.changeLocation({hash: 'baz'}))
        expect(got.hash).toBe('baz')
    })
})
