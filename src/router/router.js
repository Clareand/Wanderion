import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Home from './../content/component/Home';
import Starmaps from './../content/component/Starmaps';
class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/starmaps" component={Starmaps} />
            </Switch>
        );
    }
}

export default Router;