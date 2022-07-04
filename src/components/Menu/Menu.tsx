import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export function Menu() {
  const rotas = [
    {
      label: 'Inicio',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },

  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={`${index + Math.random() + 10}`} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>

  );
}
