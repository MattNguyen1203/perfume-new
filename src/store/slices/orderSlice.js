import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderAPI from "~/api/user/orderAPI";

// Get Pending Order
export const getPendingOrder = createAsyncThunk(
  "order/getPendingOrder",
  async (arg, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    if (auth.isLoggedIn) {
      const res = await orderAPI.getPendingOrder();
      return res;
    } else {
      const res = JSON.parse(localStorage.getItem("order"));
      const totalQty = res.reduce((total, item) => (total += item.quantity), 0);

      const totalPayment = res.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      );

      return {
        cart: { detail: res, totalItem: totalQty },
        total: totalPayment,
      };
    }
  }
);

// Handle Pending Order
export const handlePendingOrder = createAsyncThunk(
  "order/handlePendingOrder",
  async (arg, thunkAPI) => {
    const { order, auth } = thunkAPI.getState();
    console.log(order);

    try {
      // First Pending Order
      if (order.list.length === 0) {
        console.log("length === 0");
        if (auth.isLoggedIn) {
          await orderAPI.addOrder({
            status: "Pending",
            cart: [arg.product],
          });
        } else {
          localStorage.setItem("order", JSON.stringify([arg.product]));
        }
        return [arg.product];
      } else {
        console.log("length khác 0");
        // Pending Order existed
        // Check product selected existed: itemIndex > 0 => existed
        const itemIndex = order.list.findIndex(
          (item) =>
            item.productId === arg.product.productId &&
            item.capacity === arg.product.capacity
        );

        console.log(itemIndex);
        let result = [];
        if (itemIndex >= 0) {
          // product existed
          if (arg.type === "ADD_ITEM") {
            // Add product To cart
            result = order.list.map((item, index) => {
              return index === itemIndex
                ? { ...item, quantity: item.quantity + arg.product.quantity }
                : item;
            });

            console.log(result);
          } else if (arg.type === "REMOVE_ITEM") {
            // Remove product
            result = order.list.filter(
              (item, index) =>
                (index !== itemIndex ||
                  (index === itemIndex &&
                    item.capacity !== arg.product.capacity)) &&
                item
            );
          }
        } else if (itemIndex < 0) {
          // product not existed
          result = [...order.list, arg.product];
          console.log(result);
        }
        if (auth.isLoggedIn) {
          await orderAPI.updateOrderPending({
            status: "Pending",
            cart: result,
          });
        } else {
          localStorage.setItem("order", JSON.stringify(result));
        }

        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    list: [],
    totalQty: 0,
    totalPayment: 0,
    isLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getPendingOrder.fulfilled]: (state, action) => {
      state.isLoading = true;
    },
    [getPendingOrder.fulfilled]: (state, action) => {
      if (action.payload.cart) {
        // console.log(action.payload);
        const newState = {
          list: action.payload.cart.detail,
          totalQty: action.payload.cart.totalItem,
          totalPayment: action.payload.total,
          isLoading: false,
        };

        return newState;
      }
    },
    [handlePendingOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [handlePendingOrder.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = orderSlice;
export const {} = actions;
export default reducer;
