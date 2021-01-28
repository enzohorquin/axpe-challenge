import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './combinedReducer';

const initStore = () => {
    const logger = createLogger();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares = [logger];
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
    return store;
};

export default initStore;