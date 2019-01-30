import React from 'react'

import logo from '../../logo.svg'

const BasicLayout = ({children}) => {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            {children}
        </React.Fragment>
    )
}

export default BasicLayout
