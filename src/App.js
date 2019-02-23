import React from 'react'
import {renderRoutes} from 'react-router-config'

import {IntlProvider} from 'react-intl'
import translations from './i18n/locales'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as locale from './containers/locale/actions'
import * as routing from './containers/routing/actions'
import * as counter from './containers/counter/actions'

import './App.css'

const App = ({route, state, actions}) => {
    const localeName = state.locale.name
    const messages = translations[localeName]

    return (
        <IntlProvider locale={localeName} key={localeName} messages={messages}>
            <div className="App">
                {renderRoutes(route.routes, {state, actions})}
            </div>
        </IntlProvider>
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
            locale: bindActionCreators(locale, dispatch),
            routing: bindActionCreators(routing, dispatch),
            counter: bindActionCreators(counter, dispatch)
        }
    }
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(App)
