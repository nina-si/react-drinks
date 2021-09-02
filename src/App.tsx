import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import { Listing } from "./components/CocktailsList/CocktailsList";
import Header from "./components/Header/Header";
import { Card } from "./components/CocktailCard/CocktailCard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Listing} />
            <Route path="/:id" component={Card} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
