import React from 'react';

import styles from './HomePage.module.css';

const UpdateRecipeItemView = () => (
  <div className={styles.homePage_container}>
    <h1 className={styles.homePageTitle}>Welcome On CookBook</h1>
    <a
      className={styles.link}
      href="https://dederiacookbook.herokuapp.com/"
      target="blank"
    >
      cookBook_client on Heroku
    </a>
    <a className={styles.link} href="2" target="blank">
      cookBook_client on Heroku
    </a>
    <a className={styles.link} href="2" target="blank">
      gitHub_server
    </a>
    <a className={styles.link} href="2" target="blank">
      github_client
    </a>
  </div>
);

export default UpdateRecipeItemView;
