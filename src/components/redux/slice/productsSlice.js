import { createSlice } from "@reduxjs/toolkit";
import productList from "../../data/products.json";

const productsSLice = createSlice({
  name: "products",
  initialState: {
    products: productList,
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productsSLice.actions;

export const selectFilteredProducts = (state) => {
  const { products, searchTerm } = state.products;
  if (searchTerm === "") {
    return products;
  }
  return products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default productsSLice.reducer;
