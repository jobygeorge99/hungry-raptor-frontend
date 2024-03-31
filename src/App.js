import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDish from './components/AddDish';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>} />
          <Route path='/addDish' element={<AddDish/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
