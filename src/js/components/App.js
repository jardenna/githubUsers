import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainHeader from '@layout/MainHeader';
import GithubState from '../context/github/GithubState';
import { routes } from '@common/constants/nav';
import NotFound from '@components/pages/NotFound';

function App() {

   return (
      <GithubState>
         <BrowserRouter>
            <MainHeader />
            <Switch>
               {routes.map(route =>
                  <Route
                     key={route.path}
                     exact={route.exact}
                     path={route.path}
                     component={route.main} />
               )}

               <Route component={NotFound} />
            </Switch>
         </BrowserRouter>
      </GithubState>
   );
}

export default App;
