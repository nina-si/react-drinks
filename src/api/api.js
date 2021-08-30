import {GET_COCKTAILS_ENDPOINT} from '../constants';

//Cocktails
export const getAllDrinks = () => {
    fetch(GET_COCKTAILS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => this.setState({ cocktailsData: data.drinks }));
}

//CocktailCard
export const getDrinkInfo = (id) => {
    fetch(`${GET_COCKTAIL_INFO_ENDPOINT}${this.props.id}`)
      .then((res) => res.json());
}

//SearchForm
export const searchDrinks = (text) => {
    fetch(`${SEARCH_COCKTAIL_ENDPOINT}${text}`)
      .then((res) => res.json());
}