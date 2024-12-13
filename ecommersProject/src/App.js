import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basket from './pages/Basket'; 
import Home from './pages/Home';
import 'animate.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
