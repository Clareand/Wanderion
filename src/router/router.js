import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Home from './../content/component/Home';
import Starmaps from './../content/component/Starmaps';
import Order from './../content/component/Order';
import Check from "./../content/component/CheckOrder";
import MoonPhase from "./../content/component/MoonPhase";
class Router extends Component {
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/starmaps" component={Starmaps} />
            <Route path="/order" component={Order} />
            <Route path="/check" component={Check} />
            <Route path="/moonPhase" component={MoonPhase} />
          </Switch>
        );
    }
}

export default Router;