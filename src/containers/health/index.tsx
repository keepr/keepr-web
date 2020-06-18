import React from 'react';

// components
import Page from '../../components/page';

const VERSION = process.env.VERSION || '0.0.0';
const ENV = process.env.NODE_ENV || 'development';

const Health = () => (
  <Page title="Health">
    <ul>
      <li>ENV: {ENV}</li>
      <li>VERSION: {VERSION}</li>
    </ul>
  </Page>
);

export default Health;
