/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Modal from '../../modal';

import Spinner from '../../spinner';
import RecipeView from './RecipeItemView';
import styles from './RecipeItem.module.css';
import UpdateRecipeItemView from './updateRecipe/UpdateRecipeItemView';
import * as api from './$services/api';
import routes from '../../../configs/routes';

const INITIAL_STATE = {
  currentRecipe: {},
  isLoading: false,
  isModalOpened: false,
  isShowPatches: false,
  name: '', // To update
  description: '', // To update
};

class RecipeContainer extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const { id } = this.props;

    api.getRecipeById(id).then(data => {
      const { recipe } = data;
      this.setState({
        currentRecipe: recipe,
        isLoading: false,
        name: recipe.name,
        description: recipe.description,
      });
    });
  }

  handleUpdateSubmit = e => {
    e.preventDefault();
    const { name, description, currentRecipe } = this.state;

    const { id } = this.props;
    if (!name.length && !description) return;
    if (
      name === currentRecipe.name &&
      description === currentRecipe.description
    )
      return;

    const newRecipe = {
      name,
      description,
    };
    const dataToUpdate = {
      newRecipe,
      toPatches: currentRecipe,
    };

    this.setState({
      isLoading: true,
    });
    api
      .updateRecipe(id, dataToUpdate)
      .then(data =>
        this.setState({
          currentRecipe: data.createdRecipe,
          isLoading: false,
          isModalOpened: false,
        }),
      )
      .catch(err => {
        this.setState({
          isLoading: false,
          isModalOpened: false,
        });
        console.log(err);
        alert(
          'error while updating. Probably you are trying to save "name" that is not vacant',
        );
      });
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push({
      pathname: routes.RECIPES,
    });
  };

  handleChangeOnUpdate = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleShowUpdateModal = () => {
    const { currentRecipe } = this.state;
    const { name, description } = currentRecipe;
    this.setState({
      isModalOpened: true,
      name,
      description,
    });
  };

  toggleShowPatches = () => {
    this.setState(state => ({
      isShowPatches: !state.isShowPatches,
    }));
  };

  reset = () => {
    this.setState({
      name: '',
      description: '',
      isLoading: false,
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpened: false });
  };

  render() {
    const {
      currentRecipe,
      isLoading,
      isModalOpened,
      isShowPatches,
    } = this.state;

    const UpdateBtn = () => (
      <button
        className={styles.updateBtn}
        type="button"
        onClick={this.handleShowUpdateModal}
      >
        Edit
      </button>
    );
    const { patches } = currentRecipe;

    const recipePatch = patches
      ? Array.from(patches)
          .sort((a, b) => {
            const c = new Date(Object.values(a)[0].createdAt);
            const d = new Date(Object.values(b)[0].createdAt);
            return d - c;
          })
          .map(el => {
            const patch = i => Object.values(i)[0];

            return (
              <li
                key={patch(el).createdAt}
                className={styles.recipePatched_item}
              >
                <p className={styles.recipePatched_updatedAt}>
                  Revision{patches.reverse().indexOf(el)}:
                  {new Date(patch(el).createdAt).toLocaleString('uk-UA')}
                </p>
                <p className={styles.recipePatched_Name}>
                  Name: {patch(el).name}
                </p>
                <p className={styles.recipePatched_Descr}>
                  Description: {patch(el).description}
                </p>
              </li>
            );
          })
      : null;

    return isLoading ? (
      <Spinner />
    ) : (
      <>
        <button
          className={styles.goBackBtn}
          onClick={this.handleGoBack}
          type="button"
        />
        <div className={styles.recipe_container}>
          <RecipeView currentRecipe={currentRecipe} />
          <div className={styles.patches_list_wrap}>
            <button
              type="button"
              className={styles.showPatchestsBtn}
              onClick={this.toggleShowPatches}
            >
              {!isShowPatches ? 'show revisions' : 'hide revisions'}
            </button>
            {isShowPatches &&
              (currentRecipe.patches.length > 0 ? (
                <ul className={styles.patches_list}>{recipePatch}</ul>
              ) : (
                <p>
                  This is first revision that was created :{' '}
                  {new Date(currentRecipe.createdAt).toLocaleString('uk-UA')}
                </p>
              ))}
          </div>
          {isModalOpened ? (
            <Modal onClose={this.handleCloseModal}>
              <UpdateRecipeItemView
                props={this.state}
                onChange={this.handleChangeOnUpdate}
                currentRecipe={currentRecipe}
                onReset={this.reset}
                onSubmit={this.handleUpdateSubmit}
              />
            </Modal>
          ) : (
            <UpdateBtn />
          )}
        </div>
      </>
    );
  }
}
export default RecipeContainer;
