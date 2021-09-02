import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchItemsData } from "../../actions/thunks";
import { DrinkItem } from "../CocktailItem/CocktailItem";
import { Item } from "../../types";

import "./CocktailsList.scss";

type PropsFromRedux = typeof mapDispatchToProps;

interface ListProps extends PropsFromRedux {
  id: string;
  name: string;
  img: string;
  hasError: boolean;
  isLoading: boolean;
  items: Item[];
}

class CocktailsList extends Component<ListProps> {
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
            return <DrinkItem key={cocktail.id} {...cocktail} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
    hasError: state.itemsHasError,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = {
  fetchData: fetchItemsData,
};

export const Listing = connect<any, any, ListProps>(
  mapStateToProps,
  mapDispatchToProps
)(CocktailsList);
