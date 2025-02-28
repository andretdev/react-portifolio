import Navbar from "./layouts/Navbar";
import Aboutme from "./pages/Aboutme";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";

function App() {
  return (
    <main>
      <section>
        <Navbar />
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
