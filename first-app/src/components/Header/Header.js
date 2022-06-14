import {NavLink} from 'react-router-dom';
import styles from "./Header.module.css";


const menu = [
  {title: "Home", to: '/'},
  {title: "Chat", to: '/chat'},
  {title: "profile", to: '/profile'},
]

export function Header() {
  return (
    <div className={styles.header}>
      <h1>TwitterGramm</h1>

      <ul>
        {menu.map(item => (
          <li key={item.title}>
            <NavLink to={item.to} className={styles.header__link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}