import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../configs/routes';

// import banan from '../data/banan.png';

const NotFoundPage = () => (
  <div>
    <h1>Error 404</h1>
    <h2>Whoops...something went wrong</h2>
    <p>
      The page you were looking for can’t be found – it may have been moved or
      deleted. Please try again or click
      <Link to={routes.RECIPES}> here </Link>
      to return to the recipes page.
    </p>
    {/* <img src={banan} alt="not_found" width="600 px" /> */}
  </div>
);
export default NotFoundPage;
