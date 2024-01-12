import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Nabvar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <main>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio3</section>
      <section>Portfolio2</section>
      <section id="Contact">Contact</section>
    </main>
  );
};

export default App;
