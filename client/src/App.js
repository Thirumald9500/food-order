import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from "./compoment/jstemplates/home"
import Login from './compoment/jstemplates/login';
import Register from './compoment/jstemplates/register';
import Product from './compoment/jstemplates/product';
import Order from './compoment/jstemplates/order';
import Navbar from './compoment/jstemplates/navbar';
import Cart from './compoment/jstemplates/cartpage';


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
