import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchItemsData } from "../../actions/thunks";
import CocktailItem from "../CocktailItem/CocktailItem";
import "./CocktailsList.scss";

class CocktailsList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.hasError) {
      return <p className="message">Failed to load drinks</p>;
    }

    if (this.props.isLoading) {
      return <p className="message">Loading…</p>;
    }

    return (
      <div className="cocktails">
        {this.props.items &&
          this.props.items.map((cocktail) => {
            return <CocktailItem key={cocktail.id} {...cocktail} />;
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

const mapDispatchToProps = {
  fetchData: fetchItemsData,
};

export const Listing = connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailsList);
