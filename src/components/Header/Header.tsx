import React, { Component } from "react";
import { Search } from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1>Cocktails from all over the world</h1>
        </Link>
        <Search />
      </header>
    );
  }
}

export default Header;
