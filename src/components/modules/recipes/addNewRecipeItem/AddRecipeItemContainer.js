import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddNewRecipeForm from './AddRecipeItemView';
import Spinner from '../../../spinner';
import recipesOperations from '../duck/recipesOperations';

const INITIAL_STATE = {
  name: '',
  description: '',
  image: '',
  isLoading: false,
};

class AddRecipeItemContainer extends Component {
  state = {
    ...INITIAL_STATE,
  };

  toggleLoading = () => {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleReset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, image, description } = this.state;
    const { fetchPostRecipe } = this.props;
    const { onClose } = this.props;

    this.toggleLoading();

    return fetchPostRecipe({
      name,
      image,
      description,
    }).then(() => {
      this.toggleLoading();
      onClose();
    });
  };

  render() {
    const { onGoBack } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        {isLoading && <Spinner />}
        <AddNewRecipeForm
          props={this.state}
          onChange={this.handleChange}
          onReset={this.handleReset}
          onSubmit={this.handleSubmit}
          onGoBack={onGoBack}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchPostRecipe: recipesOperations.fetchPostRecipe,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddRecipeItemContainer);
