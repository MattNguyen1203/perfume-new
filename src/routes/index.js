import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/user/Home/Home";
import ProductList from "~/pages/user/Products/ProductList/ProductList";
import ProductDetail from "~/pages/user/Products/ProductDetail/ProductDetail";
import Cart from "~/pages/user/Cart/Cart";
import Contact from "~/pages/user/Contact/Contact";
import Auth from "~/pages/user/Auth/Auth";
import Checkout from "~/pages/user/Checkout/Checkout";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/products", component: ProductList, layout: DefaultLayout },
  { path: "/products/:id", component: ProductDetail, layout: DefaultLayout },
  { path: "/stores", component: Contact, layout: DefaultLayout },
  { path: "/cart", component: Cart, layout: DefaultLayout },
  { path: "/checkout", component: Checkout, layout: DefaultLayout },
  { path: "/auth", component: Auth, layout: DefaultLayout },
];
