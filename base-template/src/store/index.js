import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {

    const middlewares = [thunk, logger];
  
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    if(module.hot) {
        module.hot.accept("../reducers/", () => {            
                const updatedRootReducer = require("../reducers/").default;
                store.replaceReducer(updatedRootReducer);
            }
        );
    }

    return store;
};

export default configureStore;