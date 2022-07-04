import { CgSearch } from 'react-icons/cg';
import styles from './Buscador.module.scss';

interface IBuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>
}
export function Buscador({ busca, setBusca }: IBuscadorProps) {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={busca}
        placeholder="Buscar"
        onChange={(event) => setBusca(event.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
