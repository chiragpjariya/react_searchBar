import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  allData: [],
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
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
  },
});

export const { setSearchResults, setSearchInput, setAllData } = searchSlice.actions;
export default searchSlice.reducer;
