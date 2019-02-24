import React from 'react'

import {IntlProvider} from 'react-intl'
import translations from './i18n/locales'

import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as locale from './containers/locale/actions'
import * as routing from './containers/routing/actions'
import * as counter from './containers/counter/actions'

import './App.css'

const App = ({state, actions}) => {
    const localeName = state.locale.name
    const messages = translations[localeName]

    return (
        <IntlProvider locale={localeName} key={localeName} messages={messages}>
            <HashRouter>
                <div className="App">
                    {renderRoutes(routes, {state, actions})}
                </div>
            </HashRouter>
        </IntlProvider>
    )
}

const mapStateToProps = (state, props) => {
    return {state}
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
