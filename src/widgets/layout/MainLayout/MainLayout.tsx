// widgets/layout/MainLayout.tsx
import React, { FC, ReactNode } from 'react';
import {Header} from '@widgets/layout/Header/Header';
import {Sidebar} from '@widgets/layout/Sidebar/Sidebar';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
        <Header name="Alex Smith"/>
        <div className={styles.sidebar}>
            <Sidebar />            
        </div>
        <main className={styles.mainContent}>
            {children}
        </main>
    </div>
  );
};

export default MainLayout;
