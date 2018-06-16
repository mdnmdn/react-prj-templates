import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'));
}

render();

if (module.hot) {
    module.hot.accept("./App", () => {
        setTimeout(render);
    });
}
