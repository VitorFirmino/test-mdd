import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import moreInformation from '../pages/MoreInformation';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard-map" component={Dashboard} />
      <Route path="/informations" component={moreInformation} />
    </Switch>
  );
};

export default Routes;
