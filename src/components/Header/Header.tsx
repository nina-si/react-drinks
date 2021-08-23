import React, { Component } from "react";
import SearchForm from "../Search/SearchForm/SearchForm";
import { Link } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1>Cocktails from all over the world</h1>
        </Link>
        <SearchForm />
      </header>
    );
  }
}

export default Header;
