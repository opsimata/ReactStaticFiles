import menu from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";

export default function Itens() {
  return (
    <div className={styles.itens}>
      {menu.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
