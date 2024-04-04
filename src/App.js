import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDish from './components/AddDish';
import RemoveDish from './components/RemoveDish';
import PendingOrders from './components/PendingOrders';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/addDish' element={<AddDish/>} />
          <Route path='/removeDish' element={<RemoveDish/>} />
          <Route path='/pendingOrders' element={<PendingOrders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
