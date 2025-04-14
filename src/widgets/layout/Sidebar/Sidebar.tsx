// widgets/layout/Sidebar/Sidebar.tsx
import { MenuItem } from '@shared/ui/MenuItem/MenuItem';
import GroupPerson from '@assets/icons/group_person.svg?react';
import Logout from '@assets/icons/logout.svg?react';
import Person from '@assets/icons/person.svg?react';
import styles from './Sidebar.module.css';
import { FC } from 'react';

export const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.menu}>
        <MenuItem icon={<GroupPerson />} label="Teams" active/>
        <MenuItem icon={<Person />} label="Players" />
      </nav>

      <div className={styles.bottom}>
        <MenuItem icon={<Logout />} label="Sign out" active/>
      </div>
    </aside>
  );
};
