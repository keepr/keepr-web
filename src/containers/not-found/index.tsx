import React from 'react';
import { Helmet } from 'react-helmet';
import { FaDungeon } from 'react-icons/fa';

import styles from './styles.scss';

const NotFound = () => (
  <div className={styles.notFound}>
    <Helmet title="404 Not Found! | Keeper" />
    <h1>Nah</h1>
    <FaDungeon />
    <p>Not this way</p>
  </div>
);

export default NotFound;
