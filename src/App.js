import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Playboard from './pages/Playboard';
import Home from './pages/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='playboard' element={<Playboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
