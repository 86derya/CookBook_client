import React from 'react';

import SiteNav from './siteNav';
import styles from './AppHeader.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <SiteNav />
    </div>
  </header>
);

export default Header;
