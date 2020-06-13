import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import PointCreate from './pages/PointCreate';
import PointIndex from './pages/PointIndex';

const Routes = () => {

    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={PointCreate} path="/cadastro" />
            <Route component={PointIndex} path="/pontos" />
        </BrowserRouter>
    );
}

export default Routes;
