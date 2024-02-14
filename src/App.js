import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Porjects";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
