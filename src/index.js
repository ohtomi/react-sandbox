import React from 'react'
import ReactDOM from 'react-dom'

import {addLocaleData} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import jaLocaleData from 'react-intl/locale-data/ja'

import {Provider} from 'react-redux'
import store from './store'

import history from './history'
import App from './App'

import './index.css'

import * as serviceWorker from './serviceWorker'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

const renderer = (location) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
}

history.listen((location) => renderer(location))
renderer(history.location)

serviceWorker.unregister()
