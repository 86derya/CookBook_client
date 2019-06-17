/* eslint-disable no-alert */
import axios from 'axios';

import actions from './recipesActions';
import baseURL from '../../../../configs/serverUrl';

axios.defaults.baseURL = baseURL;

const fetchRecipesItems = () => async dispatch => {
  dispatch(actions.fetchAllRecipesRequest());
  try {
    const response = await axios.get(`/recipes`);
    // console.log('data.recipes', response.data.recipes);
    dispatch(actions.fetchAllRecipesSuccess(response.data.recipes));
  } catch (error) {
    console.log('error', error);
    dispatch(actions.fetchAllRecipesError(error));
  }
};
const fetchPostRecipe = newItem => async dispatch => {
  dispatch(actions.fetchAddNewRecipeRequest());
  try {
    const response = await axios.post(`/recipes`, newItem);
    // console.log('data.created', response.data);
    dispatch(actions.fetchAddNewRecipeSuccess(response.data.createdRecipe));
    alert('Dish was Successfully added!');
  } catch (error) {
    dispatch(actions.fetchAddNewRecipeError(error));
    alert('error', error);
  }
};

export default {
  fetchRecipesItems,
  fetchPostRecipe,
};
