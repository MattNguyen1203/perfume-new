import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPI from "~/api/user/productAPI";

export const getProductList = createAsyncThunk(
  "productList/getProductList",
  async (arg, thunkAPI) => {
    const res = await productAPI.filter(arg);
    return {
      list: res.list,
      totalPage: res.numberOfPages,
    };
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
  },
});

const { reducer, actions } = productSlice;
export const { updatefilterList } = actions;
export default reducer;
