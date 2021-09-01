import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchItemData } from "../../actions/thunks";

import "./CocktailCard.scss";

class CocktailCard extends Component {
  private _isMounted: boolean;
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchData(this.props.id);
  }

  componentDidUpdate() {
    this._isMounted = true;
    this.props.fetchData(this.props.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Fragment>
        {!this.props.data[0] && <p>Loading...</p>}
        {this.props.data[0] && (
          <div>
            <h2 className="cocktail-card-name">
              Коктейль {this.props.data[0].strDrink}
            </h2>
            <div className="cocktail-card-container">
              <div className="cocktail-picture">
                <img
                  src={this.props.data[0].strDrinkThumb}
                  alt={this.props.data[0].strDrink}
                />
              </div>
              <div className="cocktail-info">
                <h3>Description:</h3>
                <p>{this.props.data[0].strInstructions}</p>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.selectDrink.selectedDrinkId, data: state.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id: string) => dispatch(fetchItemData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailCard);
