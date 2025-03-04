import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
function App() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        <Home />
      </section>
      <section>
        <Aboutme />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
