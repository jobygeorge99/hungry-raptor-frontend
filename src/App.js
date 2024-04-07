// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDish from './components/AddDish';
import RemoveDish from './components/RemoveDish';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PendingOrders from './components/PendingOrders';
import FulfilledOrders from './components/FulfilledOrders';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddDish/>} />
          <Route path='/removeDish' element={<RemoveDish/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/pendingOrders' element={<PendingOrders/>}/>
          <Route path='/FulfilledOrders' element={<FulfilledOrders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
