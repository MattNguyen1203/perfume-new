import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

const rootReducer = {
  product: productReducer,
  //   productList: productListReducer,
  //   productDetail: productDetailReducer,
  //   sideBar: sideBarReducer,
  //   adminProducts: adminProductsSlice.reducer,
  //   adminOrders: adminOrdersSlice.reducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
