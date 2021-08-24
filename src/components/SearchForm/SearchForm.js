import React, { Component } from "react";
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
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      enteredValue: "",
      isSearchStarted: false,
      isDropDownShown: false,
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
      this.handleSearchTimer.bind(this);
      this.setState({ isSearchStarted: true });
      this.getDrinkByName(enteredText);
    } else {
      this.setState({
        isSearchStarted: false,
        isDropDownShown: false,
        searchResults: [],
      });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.enteredValue !== this.state.enteredValue) {
      this.handleSearchTimer();
    }
  }
  
  handleSearchTimer () {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({isDropDownShown: true});
    }, 1000);
  }  

  autocompleteClickHandler(event) {
    this.props.drinkSelected(event.target.attributes.dataid.value);
    this.clearSearchInput();
    this.setState({
      enteredValue: "",
      isSearchStarted: false,
      isDropDownShown: false,
      searchResults: [],
    });
  }
  
  clearSearchInput() {
    document.getElementById('search').value="";
  }

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
        />
        {this.state.isDropDownShown && !this.state.searchResults && (
          <ul className="autocomplete">
            <li>No cocktail found</li>
          </ul>
        )}
        {this.state.isDropDownShown && this.state.searchResults && (
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
