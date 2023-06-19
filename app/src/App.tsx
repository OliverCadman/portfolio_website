import "./App.css";
import Header from "./components/home/links/Links";
import Hero from "./components/home/hero/Hero";
import SkillsList from "./components/home/skills/SkillsList";
import ProjectList from "./components/home/projects/ProjectList";
import Footer from "./components/home/footer/Footer";

function App() {
  return (
    <>
      <main className="main">
        <header>
          <Header classOne="header" classTwo="header--positioned" />
        </header>
        <Hero />
        <SkillsList />
        <ProjectList />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
