import React, { Component } from "react";
import { GET_COCKTAILS_ENDPOINT } from "../../constants";
import CocktailItem from "../CocktailItem/CocktailItem";

import "./Cocktails.scss";

type CocktailsProps = {};
type CocktailsState = { cocktailsData: [] };

class Cocktails extends Component<{ CocktailsProps: any; CocktailsState }> {
  constructor(props: CocktailsProps) {
    super(props);
    this.state = {
      cocktailsData: [],
    };
  }
  componentDidMount() {
    fetch(GET_COCKTAILS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => this.setState({ cocktailsData: data.drinks }));
  }

  render() {
    const cocktailItems = this.state.cocktailsData.map((cocktail) => {
      return <CocktailItem key={cocktail.idDrink} {...cocktail} />;
    });

    return <div className="cocktails">{cocktailItems}</div>;
  }
}

export default Cocktails;
