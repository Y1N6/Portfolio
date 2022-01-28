import './App.css';

import ReactFullpage from "@fullpage/react-fullpage"

import Nav from './components/Nav';
import About from './screens/About';
import Contact from './screens/Contact';
import Experience1 from './screens/Experience1';
import Skills from './screens/Skills';


function App() {
  return (
    <>
    <Nav />
    <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    // navigation <===  Add "navigation" to add a Slider on the right
    // navigationPosition = {'left'}
    render={({ state, fullpageApi }) => {
      return (     
        <ReactFullpage.Wrapper>
          <div className="section" data-anchor='About'>
            <About />
          </div>
          <div className="section" data-anchor='Skills'>
            <Skills />
          </div>
          <div className="section" data-anchor='Experience1'>
            <Experience1 />
          </div>
          <div className="section" data-anchor='Contact'>
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      )
    }}
    />
    
    </>
  );
}

export default App;
