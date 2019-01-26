import React from 'react'

const Link = ({replaceHistory, pushHistory, replace, dispatch, to, children}) => {
    const onClick = (ev) => {
        ev.preventDefault()
        if (replace) {
            replaceHistory(to)
        } else {
            pushHistory(to)
        }
    }
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Link
