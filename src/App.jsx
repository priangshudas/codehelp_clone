import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll();

//components import
import Upper_header from "./components/Upper_header";
import Main_header from "./components/Main_header";
import Hero from "./components/Hero";
import Soicalcounts from "./components/Soicalcounts";

//css import
import "./styles/App.css";

function App() {
  return (
    <div className="maindiv">
      <Upper_header />
      <Main_header />
      <Hero />
      <Soicalcounts />
    </div>
  );
}

export default App;
