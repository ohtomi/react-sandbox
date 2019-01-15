export default () => (next) => (reducer, preloadedState) => {
    const initialState = Object.assign({}, preloadedState)
    const store = next(reducer, initialState)
    return store
}
