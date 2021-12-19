import "./App.css";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Porjects from "./components/Projects/Porjects";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Experience />
      <Porjects />
    </div>
  );
}

export default App;
