import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
// component that is used to customize all the css and js
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// prefix with 'ma'
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                {/* browser router -> router for using memory history here */}
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing"
                            component={Pricing} />
                        <Route path="/" component={Landing} />
                        <Route path="/log" />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};