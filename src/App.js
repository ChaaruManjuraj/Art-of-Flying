import './App.css';

import Main from './Components/Main'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Introduction from './Components/Introduction'
import Case_Studies from './Components/Case_Studies'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Main />} />
        <Route exact path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/introduction" element={ <Introduction /> } />
        <Route path="/case-studies" element={ <Case_Studies /> } />
      </Routes>
      </div>
   
  );
}

export default App;
