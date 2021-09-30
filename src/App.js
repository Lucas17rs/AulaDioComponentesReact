import Item from "./components/item";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Bom Dia</h1>
      <h2>Minha Primeira Aplicacao com React</h2>
      <ul>
        <Item> Item 01</Item>
        <Item> Item 02</Item>
        <Item> Item 03</Item>

      </ul>
    <Card/>
    </>

    
  );
}

export default App;
