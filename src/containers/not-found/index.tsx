import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Layout from '../../components/layout';

import NotFoundUrl from './not-found.svg';

import styles from './styles.scss';

const NotFound = () => (
  <Layout>
    <div className={styles.notFound}>
      <Helmet title="404 Not Found! | Keeper" />
      <h1>Nah</h1>
      <img src={NotFoundUrl} alt="not found" className={styles.image} />
      <p>Not this way</p>
    </div>
  </Layout>
);

export default NotFound;
