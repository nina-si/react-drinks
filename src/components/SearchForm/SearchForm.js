import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./SearchForm.scss";

import { SEARCH_COCKTAIL_ENDPOINT } from "../../constants";
import { fetchSearchResults } from "../../actions/thunks";
import { drinkSelected } from "../../actions/select-drink";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.searchRef = React.createRef();
    this.state = {
      enteredValue: "",
      isSearchStarted: false,
      isDropDownShown: false,
    };
  }

  // getDrinkByName(text) {
  //   fetch(`${SEARCH_COCKTAIL_ENDPOINT}${text}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.drinks === null) {
  //         this.setState({ searchResults: [] });
  //         return;
  //       } else {
  //         const results = data.drinks.map((drink) => {
  //           return { id: drink.idDrink, name: drink.strDrink };
  //         });
  //         return results;
  //       }
  //     })
  //     .then((results) => this.setState({ searchResults: results }));
  // }

  handleInputChange = async (e) => {
    const enteredText = e.target.value;
    this.setState({ enteredValue: enteredText });

    if (enteredText.trim().length > 2) {
      this.handleSearchTimer();
      this.setState({ isSearchStarted: true });
      this.props.fetchData(enteredText);
    } else {
      this.setState({
        isSearchStarted: false,
        isDropDownShown: false,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.enteredValue !== this.state.enteredValue) {
      this.handleSearchTimer();
    }
  }

  handleSearchTimer = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ isDropDownShown: true });
      this.shiftFocus();
    }, 1000);
  };

  shiftFocus() {
    const node = this.searchRef.current;
    node.addEventListener("keydown", (e) => {
      const active = document.activeElement;
      if (e.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      } else if (e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  }

  handleAutocompleteClick = (e) => {
    this.props.drinkSelected(e.target.attributes.dataid.value);
    this.clearSearchInput();
    this.setState({
      enteredValue: "",
      isSearchStarted: false,
      isDropDownShown: false,
      searchResults: [],
    });
  };

  clearSearchInput() {
    this.setState({ enteredValue: "" });
  }

  render() {
    let searchResultItems;
    if (this.props.searchResults.length) {
      searchResultItems = this.props.searchResults.map((result) => {
        return (
          <Link
            to={`/${result.idDrink}`}
            className="autocomplete-item"
            key={result.idDrink}
            dataid={result.idDrink}
            onClick={this.handleAutocompleteClick}
          >
            {result.strDrink}
          </Link>
        );
      });
    }

    return (
      <form autoComplete="off" className="search-form">
        <input
          type="search"
          placeholder={`Type cocktail name here, i.e. margarita`}
          id="search"
          value={this.state.enteredValue}
          className="search-input"
          onChange={this.handleInputChange}
        />
        {this.state.isDropDownShown && !this.props.searchResults && (
          <ul className="autocomplete" ref={this.searchRef}>
            <li>No cocktail found</li>
          </ul>
        )}
        {this.state.isDropDownShown && this.props.searchResults && (
          <ul className="autocomplete" ref={this.searchRef}>
            {searchResultItems}
          </ul>
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSearchStarted: state.search.searchStarted,
    searchHasError: state.search.searchHasError,
    searchResults: state.search.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (text) => dispatch(fetchSearchResults(text)),
  };
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
