import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { drinkSelected } from "../../actions";

import "./CocktailItem.scss";

type PropsFromRedux = typeof mapDispatchToProps;

interface ItemProps extends PropsFromRedux {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
};

class CocktailItem extends Component<ItemProps>{
  name: string;
  img: string;
  id: string;

  constructor(props: ItemProps) {
    super(props);
    this.id = props.idDrink;
    this.img = props.strDrinkThumb;
    this.name = props.strDrink;
  }

  cardClickHandler() {
    this.props.drinkSelected(this.id);
  }

  render() {
    return (
      <Link
        to={`/${this.id}`}
        className="cocktail-item"
        onClick={this.cardClickHandler.bind(this)}
      >
        <img src={`${this.img}`} alt={this.name} className="cocktailImg" />
        <h3>{this.name}</h3>
      </Link>
    );
  }
}

const mapDispatchToProps = {
  drinkSelected,
};

export default connect(null, mapDispatchToProps)(CocktailItem);
