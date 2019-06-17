import axios from 'axios';
import baseURL from '../../../../../configs/serverUrl';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

const apiCreateRecipe = async newItem => {
  setBaseURL();
  const response = await axios.post('/recipes', newItem);
  return response;
};
export default apiCreateRecipe;
