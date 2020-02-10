import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navigation from 'components/Navigation';
import Locations from 'components/Locations';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/">
              <Locations />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
