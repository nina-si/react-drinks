import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSearchResults } from "../../actions/thunks";
import { drinkSelected, clearSearchResults } from "../../actions/actions";
import "./SearchForm.scss";

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
      if (this.state.enteredValue.trim().length > 2) {
        this.setState({ isDropDownShown: true });
        this.shiftFocus();
      }
    }, 1000);
  };

  shiftFocus() {
    const node = this.searchRef.current;
    node.addEventListener("keydown", (e) => {
      const active = document.activeElement;
      if (e.keyCode === 40 && active.nextSibling) {
        e.preventDefault();
        active.nextSibling.focus();
      } else if (e.keyCode === 38 && active.previousSibling) {
        e.preventDefault();
        active.previousSibling.focus();
      }
    });
  }

  handleAutocompleteClick = (e) => {
    this.props.onSelect(e.target.attributes.dataid.value);
    this.props.clearResults();
    this.setState({
      enteredValue: "",
      isSearchStarted: false,
      isDropDownShown: false,
    });
  };

  render() {
    let results = this.props.searchResults;
    let isAutocompleted = this.state.isDropDownShown;
    let searchResultItems;
    if (isAutocompleted && results) {
      searchResultItems = this.props.searchResults.map((result) => {
        return (
          <Link
            to={`/${result.id}`}
            className="autocomplete-item"
            key={result.id}
            dataid={result.id}
            onClick={this.handleAutocompleteClick}
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
          value={this.state.enteredValue}
          className="search-input"
          onChange={this.handleInputChange}
        />
        {isAutocompleted && !results && (
          <ul className="autocomplete" ref={this.searchRef}>
            <li>No cocktail found</li>
          </ul>
        )}
        {isAutocompleted && results && (
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

const mapDispatchToProps = {
  fetchData: fetchSearchResults,
  clearResults: clearSearchResults,
  onSelect: drinkSelected,
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
