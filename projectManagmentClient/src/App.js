import React from "react";
import Home from "./components/Home/Home";
import NotFound from "./components/Shared/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./default.scss";

// HoC imports
import WithNavbarLayout from "./hocs/WithNavbarsLayout";
import WithFullHeightLayout from "./hocs/WithFullHeightLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <WithNavbarLayout>
              <Home />
            </WithNavbarLayout>
          )}
        />
        <Route
          render={() => (
            <WithFullHeightLayout>
              <NotFound />
            </WithFullHeightLayout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
