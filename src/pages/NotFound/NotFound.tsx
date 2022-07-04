import { ReactComponent as NotFoundImg } from 'assets/not_found.svg';
import classNames from 'classnames';
import styles from './NotFound.module.scss';

export function NotFound() {
  return (
    <div className={classNames({
      [styles.container]: true,
      [styles.voltar]: true,
    })}
    >
      <NotFoundImg />
    </div>
  );
}
