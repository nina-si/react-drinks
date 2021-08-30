import React, { Component } from "react";
import CocktailItem from "../CocktailItem/CocktailItem";
import { connect } from "react-redux";
import { itemsFetchData } from "../../thunks";
import { GET_COCKTAILS_ENDPOINT } from "../../constants";

import "./Cocktails.scss";

class Cocktails extends Component {
  componentDidMount() {
    this.props.fetchData(GET_COCKTAILS_ENDPOINT);
  }

  render() {
    if (this.props.hasError) {
      return <p>Failed to load drinks</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div className="cocktails">
        {this.props.items.drinks && this.props.items.drinks.map((cocktail) => {
          return <CocktailItem key={cocktail.idDrink} {...cocktail} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasError: state.itemsHasError,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (GET_COCKTAILS_ENDPOINT) => dispatch(itemsFetchData(GET_COCKTAILS_ENDPOINT)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
