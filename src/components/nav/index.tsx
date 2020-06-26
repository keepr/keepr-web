import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';

// state
import { UserState } from '../../state/user';

// components
import MenuItems from './menu-items';

import styles from './styles.scss';

interface Props {
  onMenuClick: () => void;
}

const Nav = ({ onMenuClick }: Props) => {
  const user = useRecoilValue(UserState);

  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <Link className={styles.logo} to="/">
          keepr
        </Link>
        {user && (
          <button className={styles.burger} onClick={onMenuClick}>
            <FaBars />
          </button>
        )}
        <div className={styles.desktopNav}>
          <MenuItems />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
