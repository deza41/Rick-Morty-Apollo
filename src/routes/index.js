import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Home from './../pages/Home';


const Routing = () => (
    <Router>
        <div className="general">
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    </Router>
);

export default Routing;
