import React, { Component } from 'react';
import { Route,BrowserRouter,Switch, NavLink, Link } from 'react-router-dom'
import Home from './../content/component/Home';
import Starmaps from './../content/component/Starmaps';
import Order from './../content/component/Order';
import Check from "./../content/component/CheckOrder";
import MoonPhase from "./../content/component/MoonPhase";
import Summary from "./../content/component/SummaryOrder";
import Info from './../content/component/OrderInfo';
import Checkout from './../content/component/Checkout';
import NotFound from './../content/component/NotFound';
import Update from "./../content/component/Update";
class Routers extends Component {
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/starmaps" component={Starmaps} />
            <Route path="/order" component={Order} />
            <Route path="/check" component={Check} />
            <Route path="/moonPhase" component={MoonPhase} />
            <Route path="/summary" component={Summary} />
            <Route path="/info" component={Info} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/change" component={Update} />
          </Switch>
        );
    }
}

export default Routers;