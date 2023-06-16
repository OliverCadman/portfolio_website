import "./App.css";
import Header from "./components/home/header/Header";
import Hero from "./components/home/hero/Hero";

function App() {
  return (
    <div className="main__container p-1 pl-md-8 pr-md-8">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Hero />
      </main>
    </div>
  );
}

export default App;
