import React from "react";
import {Nav, Footer, Content} from "./components/layout/Nav";
import {TokenFinderBox} from "./components/utils/TokenFinder";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

export function App(){
    return (
        <Router>
            <Nav />

            <Switch>
                <Route exact path="/" component={Content} />
                <Route exact path="/stats/:prop" component={Content} />
                <Route exact path="/token-finder" component={TokenFinderBox} />
                <Redirect to="/" />
            </Switch>

            <Footer />
        </Router>
    )
}