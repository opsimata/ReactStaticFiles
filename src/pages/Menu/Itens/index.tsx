import menu from "./itens.json";

export default function Itens() {
  return <div>{menu.map(item => (
    <div>{item.title}</div>
  ))}</div>;
}
