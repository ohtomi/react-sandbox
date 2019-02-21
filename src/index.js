import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import history from './history'

import {addLocaleData, IntlProvider} from 'react-intl'
import jaLocaleData from 'react-intl/locale-data/ja'
import translations from './i18n/locales'

import {Provider} from 'react-redux'
import store from './store'
import routes from './routes'

import './index.css'

import * as serviceWorker from './serviceWorker'

addLocaleData(jaLocaleData)

const locale = store.getState().locale.name
const messages = translations[locale]

const renderer = (location) => {
    ReactDOM.render(
        <IntlProvider locale={locale} key={locale} messages={messages}>
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
