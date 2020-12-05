import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../src/view/Home/Home';
import NavBar from '../src/view/NavBar/NavBar';
import Proyect from './src/view/Proyect/PRecientes';
import Contact from '../src/view/Contact/Contact';
import Footer from '../src/view/Footer/Footer';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Navbar" component={NavBar} />
                    <Route exact path="/Proyect" component={PRecientes} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Footer" component={Footer} />
                </Switch>
            </BrowserRouter>
        );
   }
}