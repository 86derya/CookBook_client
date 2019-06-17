import React from 'react';

import styles from './AddRecipeItem.module.css';
import AddRecipeFormConfig from './$configs/AddRecipeFormConfig.json';

const AddRecipeItemView = ({ props, onChange, onReset, onSubmit }) => {
  const input = AddRecipeFormConfig.map(el => (
    <li key={el.name} className={styles.inputs_item}>
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
      <h1 className={styles.addRecipe_title}>Add New Recipe</h1>
      <div className={styles.addRecipe_container}>
        <div className={styles.addRecipe_form_container}>
          <form className={styles.addRecipe_form} onSubmit={onSubmit}>
            <ul className={styles.addRecipe_form_inputs_list}>{input}</ul>
            <div className={styles.addRecipe_form_controls_container}>
              <button
                type="button"
                className={styles.addRecipe_form_clearBtn}
                onClick={onReset}
              >
                Clear All
              </button>
              <button type="submit" className={styles.addRecipe_form_submitBtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipeItemView;
