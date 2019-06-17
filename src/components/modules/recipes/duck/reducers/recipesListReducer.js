import types from '../recipesActionsTypes';

export default function recipesListReducer(state = [], { type, payload }) {
  switch (type) {
    case types.RECIPES_FETCH_SUCCESS:
      return payload;
    case types.ADD_RECIPE_ITEM_FETCH_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
}
