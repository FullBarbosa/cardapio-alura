import classNames from 'classnames';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

interface IFiltros {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}
export function Filtros({ filtro, setFiltro }: IFiltros) {
  const selecionarFiltro = (opcao: IOpcao) => {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          type="button"
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id,
          })}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
