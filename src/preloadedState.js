import history from './history'

const preloadedState = {
    routing: {
        pathname: history.location.pathname,
        search: history.location.search,
        hash: history.location.search
    }
}

export default preloadedState
