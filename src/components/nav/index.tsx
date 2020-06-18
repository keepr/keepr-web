import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiBlackKnightHelm } from 'react-icons/gi';

// context
import UserContext from '../../context/user';

// components
import MenuItems from './menu-items';

import styles from './styles.scss';

interface Props {
  onMenuClick: () => void;
}

const Nav = ({ onMenuClick }: Props) => {
  const { user } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <Link className={styles.logo} to="/">
          <GiBlackKnightHelm /> Keepr
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
