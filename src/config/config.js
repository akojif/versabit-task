import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'
import parseLanguages from 'rmw-shell/lib/utils/localeTools'

const Loading = () => < LoadingComponent / >

    // eslint-disable-next-line
    const LPAsync = Loadable({
        loader: () =>
            import ('../../src/pages/LandingPage'),
        loading: Loading,
    })

const config = {
    firebase_config: {
        apiKey: "AIzaSyAaXsA7dDywd45iJqVi4JHPs5Ue5_McvqA",
        authDomain: "versabit-task.firebaseapp.com",
        databaseURL: "https://versabit-task.firebaseio.com",
        projectId: "versabit-task",
        storageBucket: "versabit-task.appspot.com",
        messagingSenderId: "1052818173857",
        appId: "1:1052818173857:web:440eeb1dcd278331db25e0",
        measurementId: "G-DQLJ37Z5KW"
  };
    },
    firebase_providers: [
        'google.com',
        'facebook.com',
        'twitter.com',
        'github.com',
        'password',
        'phone',
    ],
    googleMaps: {
        apiKey: 'AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g',
    },
    initial_state: {
        themeSource: {
            isNightModeOn: true,
            source: 'light',
        },
        locale: parseLanguages(['en', 'bs', 'es', 'ru', 'de', 'it', 'fr', 'pt'], 'en'),
    },
    drawer_width: 256,
    locales,
    themes,
    grants,
    routes,
    getMenuItems,
    firebaseLoad: () =>
        import ('./firebase'),
    landingPage: null,
}

export default config