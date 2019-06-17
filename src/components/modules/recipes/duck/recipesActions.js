import types from './recipesActionsTypes';

const fetchAllRecipesRequest = () => ({
  type: types.RECIPES_FETCH_REQUEST,
});

const fetchAllRecipesSuccess = recipesItems => ({
  type: types.RECIPES_FETCH_SUCCESS,
  payload: recipesItems,
});
const fetchAllRecipesError = error => ({
  type: types.RECIPES_FETCH_ERROR,
  payload: error,
});

const fetchAddNewRecipeRequest = () => ({
  type: types.ADD_RECIPE_ITEM_FETCH_REQUEST,
});

const fetchAddNewRecipeSuccess = recipe => ({
  type: types.ADD_RECIPE_ITEM_FETCH_SUCCESS,
  payload: recipe,
});

const fetchAddNewRecipeError = error => ({
  type: types.ADD_RECIPE_ITEM_FETCH_ERROR,
  payload: error,
});

export default {
  fetchAllRecipesRequest,
  fetchAllRecipesSuccess,
  fetchAllRecipesError,
  fetchAddNewRecipeRequest,
  fetchAddNewRecipeSuccess,
  fetchAddNewRecipeError,
};
