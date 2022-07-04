/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import opcoes from './opcao.json';
import styles from './Ordenador.module.scss';

interface IOrdenadorProps {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export function Ordenador({ ordenador, setOrdenador }: IOrdenadorProps) {
  const [aberto, setAberto] = useState(false);

  const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      type="button"
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>
        {nomeOrdenador || 'Ordenador Por'}
      </span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto,
      })}
      >
        {opcoes.map((opcao) => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
