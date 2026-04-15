
import { About } from "./components/Sections/About/About";
import { Catalog } from "./components/Sections/Catalog/Catalog";
import { Footer } from "./components/Sections/Footer/Footer";
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
        <Footer/>
      </div>
      
      
      <WhatsappBtn /> 
    </>
  );
}

export default App;
