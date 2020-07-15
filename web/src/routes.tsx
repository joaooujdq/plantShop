import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop"/>
        <Route component={Login} path="/Login"/>
        <Route component={Register} path="/Register"/>
        </BrowserRouter>
    );
}

export default Routes;