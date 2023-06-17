import "./App.css";
import Header from "./components/home/header/Header";
import Hero from "./components/home/hero/Hero";

function App() {
  return (
    <main>
      <section className="section hero">
        <Header />
        <Hero />
      </section>
    </main>
  );
}

export default App;
