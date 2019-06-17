import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../recipes.module.css';
import RecipesListCard from './RecipesListCardView';

const RecipesListView = ({ match, location, recipesList }) => {
  const RecipesGridItem = recipesList
    .sort((a, b) => {
      const c = new Date(a.createdAt);
      const d = new Date(b.createdAt);
      return d - c;
    })
    .map(({ _id, name, image, description, createdAt, updatedAt }) => (
      <li className={styles.recipeslist_item} key={_id}>
        <Link
          className={styles.recipeslist_itemLink}
          to={{
            pathname: `${match.url}/${_id}`,
            state: { from: location },
          }}
        >
          <RecipesListCard
            name={name}
            image={image}
            description={description}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        </Link>
      </li>
    ));
  return (
    <>
      <ul className={styles.recipeslist}>{RecipesGridItem}</ul>
    </>
  );
};
export default RecipesListView;
