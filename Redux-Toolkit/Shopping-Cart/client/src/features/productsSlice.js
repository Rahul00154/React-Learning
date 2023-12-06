import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

//createAsync is used to perform asynchronous task in our slice.
//it takes two parameter one is action that is (slicename/actionName) such as "products/fetchproducts" and other is callback function that performs the api call and returns the results when it is finished

export const productsFetch = createAsyncThunk(
  "products/productsFetch", //name of a

  //handling thunkErrors

  async (/*id = null, { rejectWithValue }*/) => {
    // try {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
    // } catch (error) {
    // return rejectWithValue("api calling error");
    // }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        //immer library is used to mutate the state
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        // state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
