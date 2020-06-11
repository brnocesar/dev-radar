import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import IndexPoint from './pages/IndexPoints';

const Routes = () => {

    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/cadastro" />
            <Route component={IndexPoint} path="/pontos" />
        </BrowserRouter>
    );
}

export default Routes;
