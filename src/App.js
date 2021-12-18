import "./App.css";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Porjects from "./components/Projects/Porjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Porjects />
    </div>
  );
}

export default App;
