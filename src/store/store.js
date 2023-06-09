import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";

const rootReducer = {
  product: productReducer,
  auth: authReducer,
  order: orderReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
