import React from 'react';

import Spinner from '../../spinner';
import RecipesList from './recipesList/RecipesListView';
import styles from './recipes.module.css';

const RecipesView = ({ recipesList, match, location, isLoading }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className={styles.recipesList_container}>
        <RecipesList
          recipesList={recipesList}
          match={match}
          location={location}
        />
      </div>
    )}
  </>
);
export default RecipesView;
