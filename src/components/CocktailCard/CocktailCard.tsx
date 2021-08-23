import React, { Component } from "react";
import { connect } from "react-redux";

import { GET_COCKTAIL_INFO_ENDPOINT } from "../../constants";
import { drinkSelected } from "../../actions";

import "./CocktailCard.scss";

type CardProps = {
  id: string;
};

type CardState = {
  name: string;
  imgUrl: string;
  description: string;
  ingredients: string[];
};

class CocktailCard extends Component<CardProps, CardState> {
  id: string;
  constructor(props: CardProps) {
    super(props);
    this.id = props.id;
    this.state = {
      name: "",
      imgUrl: "",
      description: "",
      ingredients: [],
    };
  }

  componentDidMount() {
    fetch(`${GET_COCKTAIL_INFO_ENDPOINT}${this.id}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.drinks[0].strDrink,
          imgUrl: data.drinks[0].strDrinkThumb,
          description: data.drinks[0].strInstructions,
          ingredients: [
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strIngredient6,
            data.drinks[0].strIngredient7,
            data.drinks[0].strIngredient8,
            data.drinks[0].strIngredient9,
            data.drinks[0].strIngredient10,
          ],
        })
      );
  }

  componentDidUpdate() {
    fetch(`${GET_COCKTAIL_INFO_ENDPOINT}${this.id}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.drinks[0].strDrink,
          imgUrl: data.drinks[0].strDrinkThumb,
          description: data.drinks[0].strInstructions,
          ingredients: [
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strIngredient6,
            data.drinks[0].strIngredient7,
            data.drinks[0].strIngredient8,
            data.drinks[0].strIngredient9,
            data.drinks[0].strIngredient10,
          ],
        })
      );
  }

  UNSAFE_componentWillUpdate() {
    fetch(`${GET_COCKTAIL_INFO_ENDPOINT}${this.id}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.drinks[0].strDrink,
          imgUrl: data.drinks[0].strDrinkThumb,
          description: data.drinks[0].strInstructions,
          ingredients: [
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strIngredient6,
            data.drinks[0].strIngredient7,
            data.drinks[0].strIngredient8,
            data.drinks[0].strIngredient9,
            data.drinks[0].strIngredient10,
          ],
        })
      );
  }

  render() {
    const cocktailIngredients = this.state.ingredients
      .filter((ingredient) => ingredient !== null)
      .map((item) => <li key={item}>{item}</li>);

    return (
      <div>
        <h2 className="cocktail-card-name">Коктейль {this.state.name}</h2>
        <div className="cocktail-card-container">
          <div className="cocktail-picture">
            <img src={this.state.imgUrl} alt={this.state.name} />
          </div>
          <div className="cocktail-info">
            <h3>Ingredients:</h3>
            <ul className="cocktail-ingredients">{cocktailIngredients}</ul>
            <h3>Description:</h3>
            <p>{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { id: state.selectedDrinkId };
};

const mapDispatchToProps = {
  drinkSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailCard);
