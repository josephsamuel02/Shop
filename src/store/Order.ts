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

const ordersTemplate = [
  {
    id: "787y8",
    userId: "8088",
    userName: "Oreoluwa yemisi",
    totalPrice: "100,033",
    DeliveryAddress: "Plain text versions of emails are important beca",
    contacts: ["09073077717", "09075324684"],
    status: "1",
    date: "oct, 10, 2023",
    orders: [
      {
        productId: "34353v",
        name: "MackBook Laptop",
        image: "/img/shopping-cart.png",
        productDetails:
          "view the HTML version of the email.Plain text versions of emails are important because they ensure that the message can be read by the recipient even if they are unable to view the HTML version of the email",
        price: "24627",
        keyFeatures: [
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
        ],
        quantity: "2",
      },
      {
        productId: "34353v",
        name: "MackBook Laptop",
        image: "/img/shopping-cart.png",
        productDetails:
          "view the HTML version of the email.Plain text versions of emails are important because they ensure that the message can be read by the recipient even if they are unable to view the HTML version of the email",
        price: "24627",
        keyFeatures: [
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
        ],
        quantity: "2",
      },
    ],
  },
  {
    id: "787y8",
    userId: "8088",
    userName: "Oreoluwa yemisi",
    totalPrice: "100,033",
    DeliveryAddress: "Plain text versions of emails are important beca",
    contacts: ["09073077717", "09075324684"],
    status: "2",
    date: "oct, 10, 2023",
    orders: [
      {
        productId: "34353v",
        name: "MackBook Laptop",
        image: "/img/shopping-cart.png",
        productDetails:
          "view the HTML version of the email.Plain text versions of emails are important because they ensure that the message can be read by the recipient even if they are unable to view the HTML version of the email",
        price: "24627",
        keyFeatures: [
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
        ],
        quantity: "2",
      },
      {
        productId: "34353v",
        name: "MackBook Laptop",
        image: "/img/shopping-cart.png",
        productDetails:
          "view the HTML version of the email.Plain text versions of emails are important because they ensure that the message can be read by the recipient even if they are unable to view the HTML version of the email",
        price: "24627",
        keyFeatures: [
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
        ],
        quantity: "2",
      },
    ],
  },
  {
    id: "787y8",
    userId: "8088",
    userName: "Oreoluwa yemisi",
    totalPrice: "100,033",
    DeliveryAddress: "Plain text versions of emails are important beca",
    contacts: ["09073077717", "09075324684"],
    status: "3",
    date: "oct, 10, 2023",
    orders: [
      {
        productId: "34353v",
        name: "MackBook Laptop",
        image: "/img/shopping-cart.png",
        productDetails:
          "view the HTML version of the email.Plain text versions of emails are important because they ensure that the message can be read by the recipient even if they are unable to view the HTML version of the email",
        price: "24627",
        keyFeatures: [
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
        ],
        quantity: "2",
      },
      {
        productId: "34353v",
        name: "MackBook Laptop",
        image: "/img/shopping-cart.png",
        productDetails:
          "view the HTML version of the email.Plain text versions of emails are important because they ensure that the message can be read by the recipient even if they are unable to view the HTML version of the email",
        price: "24627",
        keyFeatures: [
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
          "Plain text versions of emails are important because they ensure",
        ],
        quantity: "2",
      },
    ],
  },
];

const initialState = {
  Orders: ordersTemplate,
  isLoading: false,
  error: null,
};

export const getOrders = createAsyncThunk("kegow/orders", async () => {
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
export const updateOrders = createAsyncThunk("kegow/update_orders", async () => {
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
const OrderReducer = createSlice({
  name: "OrderReducer",
  initialState: initialState,
  reducers: {
    get_all_orders: (state) => {
      state.Orders;
    },
    update_order: (state, { payload }) => {
      state.Orders[0].status = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state, { payload }) => {
      state.isLoading = true;
      state.Orders;
    });

    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.Orders = payload;
    });
    builder.addCase(updateOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.Orders = payload;
    });
  },
});

export const { get_all_orders, update_order } = OrderReducer.actions;
export default OrderReducer.reducer;
