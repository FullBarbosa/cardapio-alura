import classNames from 'classnames';
import cardapio from 'data/cardapio.json';
import styles from './Item.module.scss';

type IItemProps = typeof cardapio[0];

export function Item(props: IItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true,
          })}
          >
            {props.category.label}
          </div>
          <div className={styles.item__porcao}>
            {props.size}
          </div>
          <div className={styles.item__qtdpessoas}>
            Serve
            {' '}
            {props.serving}
            {' '}
            pessoa
          </div>
          <div className={styles.item__valor}>
            R$
            {props.price}
          </div>
        </div>
      </div>
    </div>
  );
}
