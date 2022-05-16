import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app"

function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;