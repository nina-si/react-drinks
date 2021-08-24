import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cocktails from "./components/Cocktails/Cocktails";
import Header from "./components/Header/Header";
import CocktailCard from "./components/CocktailCard/CocktailCard";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Cocktails} />
            <Route path="/:id" component={CocktailCard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
