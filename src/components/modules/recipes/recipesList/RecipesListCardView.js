import React from 'react';
import styles from '../recipes.module.css';

const RecipesListCardView = ({
  name,
  image,
  description,
  createdAt,
  updatedAt,
}) => {
  const defaultImg = (
    <img
      className={styles.recipe_card_image}
      src="https://cdn.pixabay.com/photo/2017/10/27/10/49/cook-2893904_960_720.png"
      alt="default"
    />
  );
  const recipeImg = (
    <img className={styles.recipe_card_image} src={image} alt="recipe_photo" />
  );
  const recipeName = (
    <strong className={styles.recipe_card_title}> {name} </strong>
  );
  const cardCreatedAt = (
    <p className={styles.recipe_card_createAt}>
      created: {new Date(createdAt).toLocaleString('uk-UA')}
    </p>
  );
  const cardUpdatedAt = (
    <p className={styles.recipe_card_updatedAtAt}>
      revised: {new Date(updatedAt).toLocaleString('uk-UA')}
    </p>
  );
  const recipeDescr = (
    <p className={styles.recipe_card_description}> {description} </p>
  );

  return (
    <>
      {image ? recipeImg : defaultImg}
      {recipeName}
      {recipeDescr}
      <div className={styles.recipe_card_dates}>
        {cardCreatedAt}
        {createdAt !== updatedAt ? cardUpdatedAt : null}
      </div>
    </>
  );
};

export default RecipesListCardView;
