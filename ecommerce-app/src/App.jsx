import NavBar from "./components/navBar/NavBar";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Collection from "./pages/collection/Collection";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import AirPods from "./pages/products/AirPods";
import Ipad from "./pages/products/Ipad";
import Iphone from "./pages/products/Iphone";
import Mac from "./pages/products/Mac";
import {Routes,Route} from 'react-router-dom'
import Watch from "./pages/products/Watch";
import Store from "./pages/store/Store";
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
          <Route path='/orders' element={<Orders/>} />
          <Route path='/place-odrder' element={<PlaceOrder/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/ipad' element={<Ipad/>} />
          <Route path='/iphone' element={<Iphone/>} />
          <Route path='/mac' element={<Mac/>} />
          <Route path='/airpods' element={<AirPods/>} />
          <Route path='/watch' element={<Watch/>} />
        </Routes>
      </div>
  )
}

export default App;
