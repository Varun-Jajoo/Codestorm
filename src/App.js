import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import One from './components/One';
import About from './components/About';
import Particlesbg from './components/Particlebg';
import Carousel from './components/Carousel';
import Contact from './components/contact';

function App() {
  return (
<>
   <Navbar/>
   <div className="first">
    <Particlesbg>
    <One/>
    </Particlesbg>
   </div>
   <div>
   <About/>
   </div>
   <Carousel/>
   <Contact/>
   </>
  );
}

export default App;
