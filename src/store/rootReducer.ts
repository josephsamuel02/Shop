import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import authReducer from "./authSlice";
import OrderReducer from "./Order";
import ProductReducer from "./Products";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  Order: OrderReducer,
  Product: ProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
