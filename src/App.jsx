import Topbar from "../src/components/topbar/Topbar";
import Intro from "../src/components/intro/Intro";
import Portfolio from "../src/components/portfolio/Portfolio";
import Work from "../src/components/work/Work";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "../src/components/contact/Contact";
import "./app.scss"

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