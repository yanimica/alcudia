import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola CoderHouse" />
    </div>
  );
}

export default App;
