import { useEffect, useState } from 'react';
import cardapio from 'data/cardapio.json';
import { Cardapio } from 'types/Prato';
import Item from './Item';

interface IItensProps {
  busca: string;
  filtro: number | null;
  ordenador: string;
}
export function Itens(props: IItensProps) {
  const [lista, setLista] = useState(cardapio);

  const { busca, filtro, ordenador } = props;

  const testaBusca = (title: string) => {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  };

  const testaFiltro = (id: number) => {
    if (filtro !== null) return filtro === id;
    return true;
  };

  const ordenar = (novaLista: Cardapio) => {
    switch (ordenador) {
      case 'porcao':
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'qtd_pessoas':
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'preco':
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
    }
  };

  useEffect(() => {
    const novaLista = cardapio
      .filter((item) => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div>
      {lista.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}
