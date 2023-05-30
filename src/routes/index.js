import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/user/Home/Home";
import ProductList from "~/pages/user/product/ProductList/ProductList";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/products", component: ProductList, layout: DefaultLayout },
  // { path: "/products?:filter", component: ProductList },
  // { path: "/products/:id", component: ProductDetail },
  // { path: "/stores", component: ShopSystem },
  // { path: "/cart", component: Cart },
  // { path: "/checkout", component: Checkout },
  // { path: "/auth", component: Auth },
  // {
  //   path: "/admin",
  //   component: AdminRoutes,
  //   child: [
  //     { path: "", component: ProductLayout },
  //     { path: "/admin/product", component: ProductLayout },
  //     { path: "/admin/order", component: OrderLayout },
  //   ],
  // },
];
