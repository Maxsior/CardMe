import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Workflow = lazy(() => import('./Workflow'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Workflow} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
