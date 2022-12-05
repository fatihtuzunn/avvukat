import { configureStore } from "@reduxjs/toolkit";
import dilekceReducer from "./dilekceSlice";
import davaReducer from "./davaSlice";

export default configureStore({
  reducer: {
    dilekce: dilekceReducer,
    dava: davaReducer
  },
});
