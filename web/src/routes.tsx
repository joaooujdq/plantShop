import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop"/>
        </BrowserRouter>
    );
}

export default Routes;