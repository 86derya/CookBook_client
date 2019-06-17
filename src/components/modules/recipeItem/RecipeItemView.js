import React from 'react';

import styles from './RecipeItem.module.css';

const RecipeView = ({ currentRecipe }) => (
  <div className={styles.recipe_details}>
    <img
      className={styles.recipe_image}
      src={
        currentRecipe.image
          ? currentRecipe.image
          : 'https://cdn.pixabay.com/photo/2017/10/27/10/49/cook-2893904_960_720.png'
      }
      alt={currentRecipe.name}
    />
    <h2 className={styles.recipe_name}> {currentRecipe.name} </h2>
    <p className={styles.recipe_description}> {currentRecipe.description}</p>
  </div>
);

export default RecipeView;
