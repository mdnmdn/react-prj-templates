import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { Provider } from 'react-redux';

import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes';
import configureStore, { history } from './store';


const store = configureStore();
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map(r => <Route key={r.label} {...r} />)}
                </Switch>
            </ConnectedRouter>


        </Provider>,
        document.getElementById('root'));
}

render();

if (module.hot) {
    module.hot.accept("./App", () => {
        setTimeout(render);
    });
}
