import React from "react";
import Home from "./components/Home";
import NotFound from "./components/Shared/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./default.scss";

// HoC imports
import WithNavbarsLayout from "./wrappers/WithNavbarsLayout";
import WithFullHeightLayout from "./wrappers/WithFullHeightLayout";

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
