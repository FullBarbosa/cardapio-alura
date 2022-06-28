import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg'
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
        onChange={(event) => setBusca(event.target.value)} />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  )
}