import "./App.css";
import About from "./components/About";
import FooterSection from "./components/FooterSection";
import HeroHeader from "./components/HeroHeader";
import DrawerAppBar from "./components/Navbar";
import ValuesSection from "./components/ValuesSection";

function App() {
  return (
    <>
      <DrawerAppBar />
      <HeroHeader />
      <About />
      <ValuesSection />
      <FooterSection />
    </>
  );
}

export default App;
