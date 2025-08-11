import ListGroup from "./component/ListGroup";

function App() {
  const items = ["New York", "San Fsk", "Madhukhali", "Faridpur"];  // const here

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  ); 
}

export default App;
