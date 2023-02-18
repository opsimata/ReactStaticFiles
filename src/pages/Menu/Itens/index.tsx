import menu from "./itens.json";
import Item from "./Item"

export default function Itens() {
  return <div>{menu.map(item => (
    <Item key={item.id}/>
  ))}</div>;
}
