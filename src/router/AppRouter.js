import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import Signin from '../components/SignIn';
import Signup from '../components/SignUp';
import Logout from '../components/Logout';
import NotFound from '../components/NotFound';

const AppRouter = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Signin} exact/>
                <Route path="/signup" component={Signup} />
                {props.user.email && <Route path="/dashboard" component={Dashboard} /> }
                <Route path="/logout" component={Logout} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return{
        user: state.users
    }
}

export default connect(mapStateToProps)(AppRouter);