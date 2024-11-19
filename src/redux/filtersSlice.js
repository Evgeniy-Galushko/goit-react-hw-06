import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },

  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;

//  state.filter = state.filter.filter((item) => {
//    item.name.toLowerCase().includes(action.payload.toLowerCase());
//  });
// state.items = state.items.filter((contact) =>
//   contact.name.toLowerCase().includes(action.payload.toLowerCase())
// );
