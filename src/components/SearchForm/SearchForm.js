import React, { Component, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./SearchForm.scss";

import { SEARCH_COCKTAIL_ENDPOINT } from "../../constants";
import { drinkSelected } from "../../actions";

// type SearchState = {
//   enteredValue: string;
//   isSearchStarted: boolean;
//   searchResults?:
//     | [{ strDrink: string; strDrinkThumb: string; idDrink: string }]
//     | [];
// };

class SearchForm extends Component {
  // handleFocus: FocusEventHandler<HTMLAnchorElement> | undefined;
  constructor(props) {
    super(props);
    this.state = {
      enteredValue: "",
      isSearchStarted: false,
      searchResults: [],
    };
  }

  getDrinkByName(text) {
    fetch(`${SEARCH_COCKTAIL_ENDPOINT}${text}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks === null) {
          this.setState({ searchResults: [] });
          return;
        } else {
          const results = data.drinks.map(
            (drink) => {
              return { id: drink.idDrink, name: drink.strDrink };
            }
          );
          return results;
        }
      })
      .then((results) => this.setState({ searchResults: results }));
  }

  async searchInputChangeHandler(event) {
    const enteredText = event.target.value;
    this.setState({ enteredValue: enteredText });
    if (enteredText.trim().length > 2) {
      this.setState({ isSearchStarted: true });
      this.getDrinkByName(enteredText);
    } else {
      this.setState({
        enteredValue: "",
        isSearchStarted: false,
        searchResults: [],
      });
    }
  }

  autocompleteClickHandler(event) {
    this.props.drinkSelected(event.target.attributes.dataid.value);
    this.setState({
      enteredValue: "",
      isSearchStarted: false,
      searchResults: [],
    });
  }

  // inputBlurHandler(event) {
  //   event.target.value = "";
  // }

  render() {
    let searchResultItems;
    if (this.state.searchResults) {
      searchResultItems = this.state.searchResults.map((result) => {
        return (
          <Link
            to={`/${result.id}`}
            className="autocomplete-item"
            key={result.id}
            dataid={result.id}
            onClick={this.autocompleteClickHandler.bind(this)}
          >
            {result.name}
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
          className="search-input"
          onChange={this.searchInputChangeHandler.bind(this)}
          // onBlur={this.inputBlurHandler.bind(this)}
        />
        {this.state.isSearchStarted && !this.state.searchResults && (
          <ul className="autocomplete">
            <li>No cocktail found</li>
          </ul>
        )}
        {this.state.searchResults && this.state.searchResults.length > 0 && (
          <ul className="autocomplete">{searchResultItems}</ul>
        )}
      </form>
    );
  }
}

const mapDispatchToProps = {
  drinkSelected,
};

export default connect(null, mapDispatchToProps)(SearchForm);
