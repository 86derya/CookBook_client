import React from 'react';

import styles from './UpdateRecipeItem.module.css';
import UpdateRecipeFormConfig from './$configs/UpdateRecipeFormConfig.json';

const UpdateRecipeItemView = ({ props, onChange, onReset, onSubmit }) => {
  const input = UpdateRecipeFormConfig.map(el => (
    <li key={el.name} className={styles.inputs__item}>
      <label className={styles.label}>
        {el.name}
        <el.tag
          onChange={onChange}
          name={el.name}
          type={el.type}
          // eslint-disable-next-line react/destructuring-assignment
          value={props[el.name]}
          className={styles.input}
          autoComplete={el.autoComplete}
          placeholder={el.placeholder}
          required={el.required}
        />
      </label>
    </li>
  ));

  return (
    <>
      <div className={styles.updateRecipe_container}>
        <h1 className={styles.updateRecipe_title}>Edit recipe</h1>
        <div className={styles.form_container}>
          <form className={styles.updateRecipe_form} onSubmit={onSubmit}>
            <ul className={styles.inputs__list}>{input}</ul>

            <div className={styles.updateRecipe_form_controls_container}>
              <button
                type="button"
                className={styles.updateRecipe_form_clearBtn}
                onClick={onReset}
              >
                Clear All
              </button>
              <button
                type="submit"
                className={styles.updateRecipe_form_submitBtn}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateRecipeItemView;
