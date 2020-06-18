import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

interface Props {
  onMenuItemClick?: () => void;
}

const MenuItems = ({ onMenuItemClick }: Props) => (
  <>
    <Link onClick={onMenuItemClick} className={styles.link} to="/">
      Home
    </Link>
    <Link onClick={onMenuItemClick} className={styles.link} to="/clients">
      Clients
    </Link>
    <Link onClick={onMenuItemClick} className={styles.link} to="/logout">
      Logout
    </Link>
  </>
);

export default MenuItems;
