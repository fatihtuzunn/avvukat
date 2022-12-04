import { configureStore } from "@reduxjs/toolkit";
import dilekceReducer from "./dilekceSlice";

export default configureStore({
  reducer: {
    dilekce: dilekceReducer,
  },
});
