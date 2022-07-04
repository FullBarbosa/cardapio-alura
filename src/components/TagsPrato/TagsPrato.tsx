import classNames from 'classnames';
import { Prato } from 'types/Prato';

import styles from './TagsPrato.module.scss';

export function TagsPrato(props: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${props.category.label.toLowerCase()}`]]: true,
      })}
      >
        {props.category.label}
      </div>
      <div className={styles.tags__porcao}>
        {props.size}
      </div>
      <div className={styles.tags__qtdpessoas}>
        Serve
        {' '}
        {props.serving}
        {' '}
        pessoa
      </div>
      <div className={styles.tags__valor}>
        R$
        {props.price}
      </div>
    </div>
  );
}
