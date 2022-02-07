import "./App.css";

import ReactFullpage from "@fullpage/react-fullpage";
import { Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import ContactLogo from "./Components/ContactLogo";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Experience1 from "./screens/Experience1";
import Skills from "./screens/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <ContactLogo />
      <ReactFullpage
        // licenseKey = {'YOUR_KEY_HERE'}
        scrollOverflow={false}
        scrollingSpeed={1000}
        // navigation <===  Add "navigation" to add a Slider on the right
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section" data-anchor="About">
                  <About />
                </div>
                <div className="section" data-anchor="Skills">
                  <Skills />
                </div>
                <div className="section" data-anchor="Experience1">
                  <Experience1 />
                </div>
                <div className="section" data-anchor="Contact">
                  <Contact fullpageApi={fullpageApi} />
                </div>
              </ReactFullpage.Wrapper>
              <Routes>
                <Route path="/" element={<ReactFullpage.Wrapper />}></Route>
                <Route path="*" element={<ReactFullpage.Wrapper />}></Route>
              </Routes>
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
