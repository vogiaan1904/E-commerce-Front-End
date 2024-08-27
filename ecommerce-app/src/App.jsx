import NavBar from "./components/navBar/NavBar";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Collection from "./pages/collection/Collection";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Product from "./pages/product/Product";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/place-odrder' element={<PlaceOrder/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
  )
}

export default App;
