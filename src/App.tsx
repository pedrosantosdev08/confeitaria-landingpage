import "./App.css";
import { About } from "./components/Sections/About/About";
import { Hero } from "./components/Sections/Hero/Hero";
import { WhatsappBtn } from "./components/UI/WhastappBtn/WhatsappBtn";

function App() {
  return (
    <>
      <div className="app-container">
        <Hero />
        <About />
      </div>
      
      
      <WhatsappBtn /> 
    </>
  );
}

export default App;
