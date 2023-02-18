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
  const { find, filter } = props;

  function testSearch(title: string) {
    const regex = new RegExp(find, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) {
      return filter === id;
    }
    return true;
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(newList);
  }, [find, filter]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
