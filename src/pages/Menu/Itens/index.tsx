import menu from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useState, useEffect } from "react";

interface Props {
  find: string;
  filter: number | null;
  sorter: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(menu);
  const { find, filter, sorter } = props;

  function testSearch(title: string) {
    const regex = new RegExp(find, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) {
      return filter === id;
    }
    return true;
  }

  function sort(newList: typeof menu) {
    switch (sorter) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(sort(newList));
  }, [find, filter, sorter]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
