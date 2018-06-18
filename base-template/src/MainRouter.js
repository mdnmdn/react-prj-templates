import React from 'react';
import { Route, Switch, Redirect } from 'react-router' // react-router v4
import { connect } from 'react-redux';

import routes from './routes';

const MainRouter = ({authorized}) => (
    <Switch>
        {routes(authorized).map(r => {
            if (r.authorized !== undefined && !r.authorized) {
                return <Redirect to='/login' />;
            }
            return <Route key={r.label} {...r} />;
        })}
    </Switch>
);

const mapStateToProps = (state) => ({
    authorized: state.user.authenticated,
});

export default connect(mapStateToProps)(MainRouter);
