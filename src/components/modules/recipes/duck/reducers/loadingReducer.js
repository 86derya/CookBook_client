import types from '../recipesActionsTypes';

export default function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.RECIPES_FETCH_REQUEST:
    case types.ADD_RECIPE_ITEM_FETCH_REQUEST:
      return true;

    case types.RECIPES_FETCH_SUCCESS:
    case types.RECIPES_FETCH_ERROR:
    case types.ADD_RECIPE_ITEM_FETCH_SUCCESS:
    case types.ADD_RECIPE_ITEM_FETCH_ERROR:
      return false;

    default:
      return state;
  }
}
