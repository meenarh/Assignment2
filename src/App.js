import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (    
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}



export default App;
