import "./App.css";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Porjects from "./components/Projects/Porjects";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";

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
      <Education />
      <Porjects />
      <Footer />
    </div>
  );
}

export default App;
