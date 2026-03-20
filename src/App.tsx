import "./App.css";
import { About } from "./components/Sections/About/About";
import { Catalog } from "./components/Sections/Catalog/Catalog";
import { Hero } from "./components/Sections/Hero/Hero";
import { Testimonials } from "./components/Sections/Testimonials/Testimonials";
import { WhatsappBtn } from "./components/UI/WhastappBtn/WhatsappBtn";

function App() {
  return (
    <>
      <div className="app-container">
        <Hero />
        <About />
        <Catalog/>
        <Testimonials/>
      </div>
      
      
      <WhatsappBtn /> 
    </>
  );
}

export default App;
