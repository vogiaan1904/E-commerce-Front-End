import About from '../pages/about/About';
import Blogs from '../pages/blogs/Blogs';
import BrandLanding from '../pages/brandLanding/BrandLanding';
import Cart from '../pages/cart/Cart';
import NewArrival from '../pages/collection/NewArrival';
import Product from '../pages/collection/Product';
import Home from '../pages/home/Home';
import MemberShip from '../pages/memberShip/MemberShip';
import Orders from '../pages/orders/Orders';
import PlaceOrder from '../pages/placeOrder/PlaceOrder';

const publicRoutes = [
  { path: '/', page: Home },
  { path: '/about', page: About },
  { path: '/blogs', page: Blogs },
  { path: '/new-arrivals', page: NewArrival, layout: 'collection' },
  { path: '/products', page: Product, layout: 'collection' },
  { path: '/brand-landing', page: BrandLanding },
  { path: '/membership', page: MemberShip },
  { path: '/cart', page: Cart },
  { path: '/orders', page: Orders },
  { path: '/place-order', page: PlaceOrder },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
