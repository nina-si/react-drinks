import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchItemData } from "../../actions/thunks";

import "./CocktailCard.scss";

class CocktailCard extends Component {
  private _isMounted: boolean;
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      id: this.props.id,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchCardData(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this._isMounted = true;
      this.props.fetchCardData(this.props.id);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { name, img, details } = this.props.data;
    return (
      <Fragment>
        {!name && <p>Loading...</p>}
        {name && (
          <div>
            <h2 className="cocktail-card-name">Коктейль {name}</h2>
            <div className="cocktail-card-container">
              <div className="cocktail-picture">
                <img src={img} alt={name} />
              </div>
              <div className="cocktail-info">
                <h3>Instructions:</h3>
                <p>{details}</p>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.selectedDrink, data: state.data };
};

const mapDispatchToProps = {
  fetchCardData: fetchItemData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailCard);
