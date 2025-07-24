import './App.css';
import './tailwind.output.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage/Homepage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return(
    <div>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
