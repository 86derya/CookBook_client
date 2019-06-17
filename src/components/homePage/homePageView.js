import React from 'react';

import styles from './HomePage.module.css';

const UpdateRecipeItemView = () => (
  <div className={styles.homePage_container}>
    <h1 className={styles.homePageTitle}>Welcome On CookBook</h1>
    <a
      className={styles.link}
      href="https://dederiacookbook.herokuapp.com"
      target="blank"
    >
      cookBook_client on Heroku
    </a>
    <a
      className={styles.link}
      href="https://dederiacookbookserver.herokuapp.com"
      target="blank"
    >
      cookBook_server on Heroku
    </a>
    <a
      className={styles.link}
      href="https://github.com/86derya/CookBook_client"
      target="blank"
    >
      cookBook_client on GitHub
    </a>
    <a
      className={styles.link}
      href="https://github.com/86derya/CookBook_server"
      target="blank"
    >
      cookBook_server on Github
    </a>
  </div>
);

export default UpdateRecipeItemView;
