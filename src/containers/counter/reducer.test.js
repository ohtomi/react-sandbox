import reducer from './reducer'
import * as actions from './actions'

describe('value', () => {
    test('initial state', () => {
        expect(reducer(undefined, {type: '@@INIT'})).toHaveProperty('value', 0)
    })
    test('increment', () => {
        let got = reducer(undefined, actions.increment())
        expect(got.value).toBe(1)
        got = reducer(got, actions.increment())
        expect(got.value).toBe(2)
        got = reducer(got, actions.increment())
        expect(got.value).toBe(3)
    })
    test('decrement', () => {
        let got = reducer(undefined, actions.decrement())
        expect(got.value).toBe(-1)
        got = reducer(got, actions.decrement())
        expect(got.value).toBe(-2)
        got = reducer(got, actions.decrement())
        expect(got.value).toBe(-3)
    })
    test('increment then decrement', () => {
        let got = reducer(undefined, actions.increment())
        expect(got.value).toBe(1)
        got = reducer(got, actions.increment())
        expect(got.value).toBe(2)
        got = reducer(got, actions.decrement())
        expect(got.value).toBe(1)
    })
})
