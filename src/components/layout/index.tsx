import React, { useState } from 'react';
import classnames from 'classnames';

// components
import Sidebar from '../sidebar';
import Nav from '../nav';

import styles from './styles.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      className={classnames(
        styles.layout,
        showSidebar && styles.sideBarVisible
      )}
    >
      <div
        className={classnames(
          styles.container,
          showSidebar && styles.sideBarVisible
        )}
      >
        <Nav onMenuClick={() => setShowSidebar(!showSidebar)} />
        <main className={styles.content}>{children}</main>
      </div>
      <Sidebar
        visible={showSidebar}
        onCloseClick={() => setShowSidebar(false)}
      />
    </div>
  );
};

export default Layout;
