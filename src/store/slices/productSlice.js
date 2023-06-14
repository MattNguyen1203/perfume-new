import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPI from "~/api/user/productAPI";

// Get List product
export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (arg, thunkAPI) => {
    try {
      const res = await productAPI.filter(arg);
      return {
        list: res.list,
        totalPage: res.numberOfPages,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

// Get Product's details
export const getProductInfo = createAsyncThunk(
  "product/getProductInfo",
  async (param, thunkAPI) => {
    try {
      const res = await productAPI.getProductInfo(param);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    filterList: {},
    productList: {
      list: [],
      totalPage: 0,
    },
    productInfo: {},
    isLoading: true,
  },
  reducers: {
    updatefilterList: (state, action) => {
      for (let key in action.payload) {
        if (action.payload[key] === state.filterList[key]) {
          delete state.filterList[key];
        } else {
          state.filterList = {
            ...state.filterList,
            [key]: action.payload[key],
          };
        }
      }
    },
  },
  extraReducers: {
    [getProductList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductList.fulfilled]: (state, action) => {
      state.productList.list = action.payload.list || [];
      state.productList.totalPage = action.payload.totalPage;
      state.isLoading = false;
    },

    [getProductInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductInfo.fulfilled]: (state, action) => {
      state.productInfo = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = productSlice;
export const { updatefilterList } = actions;
export default reducer;
