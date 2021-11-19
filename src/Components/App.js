import "../css/App.css";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Showcase from "./Showcase";
import Contact from "./Contact";

function App() {
  return (
    <article className='main-flex'>
      <div className='left-flex'>
        <Navigation />
        <Intro />
      </div>
      <div className='right-flex'>
        <About />
        <Showcase />
        <Contact />
      </div>
    </article>
  );
}

export default App;
