import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import history from './history'

import {addLocaleData} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import jaLocaleData from 'react-intl/locale-data/ja'

import {Provider} from 'react-redux'
import store from './store'
import routes from './routes'

import './index.css'

import * as serviceWorker from './serviceWorker'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

const renderer = (location) => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                {renderRoutes(routes)}
            </HashRouter>
        </Provider>,
        document.getElementById('root')
    )
}

history.listen((location) => renderer(location))
renderer(history.location)

serviceWorker.unregister()
