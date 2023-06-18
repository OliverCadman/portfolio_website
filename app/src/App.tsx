import "./App.css";
import Header from "./components/home/header/Header";
import Hero from "./components/home/hero/Hero";
import SkillsList from "./components/home/skills/SkillsList";
import ProjectList from "./components/home/projects/ProjectList";

function App() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <SkillsList />
      <ProjectList />
    </main>
  );
}

export default App;
