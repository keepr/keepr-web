import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './styles.scss';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Page = ({ title, children }: Props) => (
  <div className={styles.page}>
    <Helmet title={`${title} | Keepr`} />
    <h2>{title}</h2>
    {children}
  </div>
);

export default Page;
