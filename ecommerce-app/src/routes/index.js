import About from '../pages/about/About';
import Cart from '../pages/cart/Cart';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Orders from '../pages/orders/Orders';
import PlaceOrder from '../pages/placeOrder/PlaceOrder';
import AirPods from '../pages/products/AirPods';
import Ipad from '../pages/products/Ipad';
import Iphone from '../pages/products/Iphone';
import Mac from '../pages/products/Mac';
import Watch from '../pages/products/Watch';

const publicRoutes = [
  { path: '/', page: Home },
  { path: '/about', page: About },
  { path: '/contact', page: Contact },
  { path: '/airpods', page: AirPods },
  { path: '/ipad', page: Ipad },
  { path: '/iphone', page: Iphone },
  { path: '/mac', page: Mac },
  { path: '/Watch', page: Watch },
];

const privateRoutes = [
  { path: '/cart', page: Cart },
  { path: '/orders', page: Orders },
  { path: '/place-order', page: PlaceOrder },
];

export { publicRoutes, privateRoutes };
