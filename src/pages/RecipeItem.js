import React from 'react';
import RecipeItem from '../components/modules/recipeItem';

const RecipeItemPage = ({ match, location, history }) => (
  <>
    <RecipeItem id={match.params.id} location={location} history={history} />
  </>
);
export default RecipeItemPage;
