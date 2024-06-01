import { createSlice } from "@reduxjs/toolkit";

const newEmployeeSlice = createSlice({
  name: "newEmployee",
  initialState: {
    isVisible: false,
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
    showAlert: false,
  },
  reducers: {
    toggleIsVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    toggleShowAlert: (state) => {
      state.showAlert = !state.showAlert;
    },
  },
});

export const newEmployeeActions = newEmployeeSlice.actions;

export default newEmployeeSlice;
