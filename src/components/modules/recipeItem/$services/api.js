import axios from 'axios';
import baseURL from '../../../../configs/serverUrl';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

export const getRecipeById = async id => {
  setBaseURL();
  const response = await axios.get(`/recipes/${id}`);
  return response.data;
};

export const updateRecipe = async (id, recipe) => {
  setBaseURL();
  const response = await axios.put(`/recipes/${id}`, recipe);
  return response.data;
};
