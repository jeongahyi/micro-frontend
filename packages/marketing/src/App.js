import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// component that is used to customize all the css and js
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// prefix with 'ma'
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing"
                        component={Pricing} />
                    <Route path="/" component={Landing} />
                    <Route path="/log" />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
};