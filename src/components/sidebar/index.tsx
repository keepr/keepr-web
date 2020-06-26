import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useClickAway } from 'react-use';
import { FaTimes } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';

// state
import { UserState } from '../../state/user';

// components
import TextAvatar from '../text-avatar';

import styles from './styles.scss';

interface Props {
  visible: boolean;
  onCloseClick: () => void;
}

const Sidebar = ({ visible, onCloseClick }: Props) => {
  const user = useRecoilValue(UserState);
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
      <Link className={styles.user} to="/profile">
        <TextAvatar text={`${user?.firstName} ${user?.lastName}`} />
        <div className={styles.info}>
          <span>
            {user?.firstName} {user?.lastName}
          </span>
          <span>Settings</span>
        </div>
      </Link>
      <Link onClick={onCloseClick} className={styles.link} to="/">
        Track
      </Link>
      <Link onClick={onCloseClick} className={styles.link} to="/clients">
        Clients
      </Link>
      <Link onClick={onCloseClick} className={styles.link} to="/profile">
        Projects
      </Link>
      <Link onClick={onCloseClick} className={styles.link} to="/logout">
        Logout
      </Link>
    </nav>
  );
};

export default Sidebar;
