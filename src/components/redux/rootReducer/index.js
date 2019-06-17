import { combineReducers } from 'redux';

import {
  recipesListReducer,
  loadingReducer,
} from '../../modules/recipes/duck/reducers';

const rootReducer = combineReducers({
  recipesList: recipesListReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
