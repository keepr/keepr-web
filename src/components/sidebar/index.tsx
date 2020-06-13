import React, { useRef } from 'react';
import classnames from 'classnames';
import { useClickAway } from 'react-use';
import { FaTimes } from 'react-icons/fa';

// components
import MenuItems from '../nav/menu-items';

import styles from './styles.scss';

interface Props {
  visible: boolean;
  onCloseClick: () => void;
}

const Sidebar = ({ visible, onCloseClick }: Props) => {
  const ref = useRef(null);
  useClickAway(ref, onCloseClick);

  return (
    <nav
      ref={ref}
      className={classnames(styles.sidebar, visible && styles.visible)}
    >
      <button className={styles.close} onClick={onCloseClick}>
        <FaTimes />
      </button>
      <MenuItems onMenuItemClick={onCloseClick} />
    </nav>
  );
};

export default Sidebar;
