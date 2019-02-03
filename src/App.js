import React from 'react'
import {renderRoutes} from 'react-router-config'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routing from './containers/routing/actions'
import * as counter from './containers/counter/actions'

import './App.css'

const App = ({route, state, actions}) => {
    return (
        <div className="App">
            {renderRoutes(route.routes, {state, actions})}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const {route} = props
    return {
        state,
        route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            routing: bindActionCreators(routing, dispatch),
            counter: bindActionCreators(counter, dispatch)
        }
    }
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(App)
