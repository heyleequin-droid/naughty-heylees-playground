import React from 'react';
import styles from './BarMenu.module.css';
import { barMenu as defaultMenu } from '../barMenu';

export type MenuItem = {
  name: string;
  coins: number;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export type BarMenuProps = {
  menu?: MenuCategory[];
  className?: string;
};

export const BarMenu: React.FC<BarMenuProps> = ({ menu = defaultMenu, className }) => {
  return (
    <aside className={`${styles.barMenu} ${className ?? ''}`.trim()}>
      <h2 className={styles.title}>Bar Menu</h2>
      {menu.map((section) => (
        <section key={section.category} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.category}</h3>
          <ul className={styles.list}>
            {section.items.map((it) => (
              <li key={it.name} className={styles.item}>
                <span className={styles.itemName}>{it.name}</span>
                <span className={styles.itemCoins}>{it.coins} coins</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};

export default BarMenu;
