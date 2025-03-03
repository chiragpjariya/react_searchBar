import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  searchResults: [],
  searchInput: "",
}


const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchResults, setSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
