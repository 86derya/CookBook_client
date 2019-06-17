import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../modal';
import AddNewRecipeForm from './addNewRecipeItem';
import RecipesView from './RecipesView';
import { recipesOperations, recipesSelectors } from './duck';
import styles from './recipes.module.css';

class RecipesContainer extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    const { fetchRecipesItems } = this.props;
    fetchRecipesItems();
  }

  handleModalOpen = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        {isModalOpen ? (
          <Modal onClose={this.handleModalOpen}>
            <AddNewRecipeForm onClose={this.handleModalOpen} />
          </Modal>
        ) : (
          <button
            type="button"
            className={styles.addRecipeBtn}
            onClick={this.handleModalOpen}
          />
        )}

        <RecipesView {...this.props} />
      </>
    );
  }
}
const mapStateToProps = state => ({
  recipesList: recipesSelectors.getRecipesList(state),
  isLoading: recipesSelectors.getIsLoading(state),
});
const mapDispatchToProps = {
  fetchRecipesItems: recipesOperations.fetchRecipesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesContainer);
