import {Route, Routes} from "@solidjs/router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";

const MerchRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/productDetails/:id" component={ProductDetails}/>
    </Routes>
  );
}

export default MerchRoutes