import React from "react";
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './hocs/Layout';

function App() {
  return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
  );
}

export default App;