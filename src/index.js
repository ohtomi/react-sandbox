import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import history from './history'

import {IntlProvider} from 'react-intl'

import {Provider} from 'react-redux'
import store from './store'
import routes from './routes'

import './index.css'

import * as serviceWorker from './serviceWorker'

const renderer = (location) => {
    ReactDOM.render(
        <IntlProvider locale="en">
            <Provider store={store}>
                <HashRouter>
                    {renderRoutes(routes)}
                </HashRouter>
            </Provider>
        </IntlProvider>,
        document.getElementById('root')
    )
}

history.listen((location) => renderer(location))
renderer(history.location)

serviceWorker.unregister()
