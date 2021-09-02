import React, { Component, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSearchResults } from "../../actions/thunks";
import { drinkSelected, clearSearchResults } from "../../actions/actions";
import { Item } from "../../types";

import "./SearchForm.scss";

type PropsFromRedux = typeof mapDispatchToProps;

interface SearchProps extends PropsFromRedux {
  dataId: string;
  searchResults: Item[];
}

interface SearchState {
  enteredValue: string;
  isSearchStarted: boolean;
  isDropDownShown: boolean;
}

class SearchForm extends Component<SearchProps, SearchState> {
  searchRef: React.RefObject<HTMLUListElement>;
  timer: any;
  constructor(props: SearchProps) {
    super(props);
    this.timer = null;
    this.searchRef = React.createRef();
    this.state = {
      enteredValue: "",
      isSearchStarted: false,
      isDropDownShown: false,
    };
  }

  handleInputChange = async (e: SyntheticEvent) => {
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

  componentDidUpdate(prevState) {
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

  handleAutocompleteClick = (e: SyntheticEvent) => {
    this.props.onSelect(e.target.dataset.id);
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
            data-id={result.id}
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

const mapStateToProps = (state: any) => {
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

export const Search = connect<any, any, SearchProps>(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
