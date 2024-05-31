import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import newEmployeeSlice from "./newEmployeeSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    newEmployee: newEmployeeSlice.reducer,
  },
});
