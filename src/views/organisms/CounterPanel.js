// @flow

import React from 'react'

type Props = {
    state: { counter: { value: number } },
    actions: {
        counter: {
            increment: Function,
            decrement: Function
        }
    }
}

const CounterPanel = (props: Props) => {
    return (
        <div>
            <span>Counter</span>
            <br/>
            <input type="number" value={props.state.counter.value} readOnly={true}/>
            <br/>
            <button onClick={ev => props.actions.counter.increment()}>increment</button>
            {' '}
            <button onClick={ev => props.actions.counter.decrement()}>decrement</button>
        </div>
    )
}

export default CounterPanel
