import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from "./compoment/home"
import Login from './compoment/login';
import Register from './compoment/register';
import Product from './compoment/product';
import Order from './compoment/order';
import Navbar from './compoment/navbar';
import Cart from './compoment/cartpage';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/order' element={<Order/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
