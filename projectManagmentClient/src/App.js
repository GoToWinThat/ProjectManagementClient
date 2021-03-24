import React from "react";
import Home from "./components/Home";
import NotFound from "./components/Shared/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// HoC imports
import WithNavbarsLayout from "./hocs/WithNavbarsLayout";
import WithFullHeightLayout from "./hocs/WithFullHeightLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <WithNavbarsLayout>
              <Home />
            </WithNavbarsLayout>
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
