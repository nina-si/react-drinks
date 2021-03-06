import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { drinkSelected } from "../../actions/actions";

import "./CocktailItem.scss";

type PropsFromRedux = typeof mapDispatchToProps;

interface ItemProps extends PropsFromRedux {
  id: string;
  name: string;
  img: string;
}

class CocktailItem extends Component<ItemProps> {
  handleCardClick = () => {
    this.props.drinkSelected(this.props.id);
  };

  render() {
    return (
      <Link
        to={`/${this.props.id}`}
        className="cocktail-item"
        onClick={this.handleCardClick}
      >
        <img
          src={`${this.props.img}`}
          alt={this.props.name}
          className="cocktailImg"
        />
        <h3>{this.props.name}</h3>
      </Link>
    );
  }
}

const mapDispatchToProps = {
  drinkSelected,
};

export const DrinkItem = connect(null, mapDispatchToProps)(CocktailItem);
