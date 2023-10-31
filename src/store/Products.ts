import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// require("dotenv").config();
import axios from "axios";

const REACT_KEGOW_MIDDLEWARE_URL = "http://127.0.0.1:7000/api/kegow-middleware";

const auth = "Basic a2Vnb3ctNXx0ZXN0QDEyM3w1Ig==";
const config = {
  headers: {
    Authorization: auth,
  },
};

const productsTemplate = [
  {
    id: "1",
    productId: "243",
    name: "important because they ensure",
    image: "/img/shopping-cart.png",
    productDetails: "",
    price: "55556",
    inStock: 344,
    keyFeatures: [
      "Plain text versions of emails are important because they ensure.",
      "Plain text versions of emails are important because they ensure.",
    ],
  },
  {
    id: "2",
    productId: "545",
    name: "important because they ensure",
    image: "/img/shopping-cart.png",
    productDetails: "",
    price: "68568",
    inStock: 0,
    keyFeatures: [
      "Plain text versions of emails are important because they ensure.",
      "Plain text versions of emails are important because they ensure.",
    ],
  },
  {
    id: "3",
    productId: "5bff",
    name: "important because they ensure",
    image: "/img/shopping-cart.png",
    productDetails: "",
    price: "5577",
    inStock: 3445,
    keyFeatures: [
      "Plain text versions of emails are important because they ensure.",
      "Plain text versions of emails are important because they ensure.",
    ],
  },
  {
    id: "4",
    productId: "45g56",
    name: "important because they ensure",
    image: "/img/shopping-cart.png",
    productDetails: "",
    price: "64537",
    inStock: 1,
    keyFeatures: [
      "Plain text versions of emails are important because they ensure.",
      "Plain text versions of emails are important because they ensure.",
    ],
  },
];

const initialState = {
  Products: productsTemplate,
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk("kegow/products", async () => {
  try {
    const response = await axios.get(`${REACT_KEGOW_MIDDLEWARE_URL}/users`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});
export const updateProducts = createAsyncThunk("kegow/update_products", async () => {
  try {
    const response = await axios.get(`${REACT_KEGOW_MIDDLEWARE_URL}/users`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});
const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState: initialState,
  reducers: {
    get_all_products: (state) => {
      state.Products;
    },
    update_product: (state, { payload }) => {
      state.Products[0] = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, { payload }) => {
      state.isLoading = true;
      state.Products;
    });

    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.Products = payload;
    });
    builder.addCase(updateProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.Products = payload;
    });
  },
});

export const { get_all_products, update_product } = ProductReducer.actions;
export default ProductReducer.reducer;
