import { ReactComponent as NotFoundImg } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export function NotFound() {
  const navigate = useNavigate();

  const handlegGoBackHome = () => {
    navigate(-1);
  };

  return (
    <div className={classNames({
      [styles.container]: true,
      [styles.voltar]: true,
    })}
    >
      <div className={styles.voltar}>
        <button type="button" onClick={handlegGoBackHome}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImg />
    </div>
  );
}
