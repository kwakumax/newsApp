import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'country',
  initialState: '', // You can set the initial selected country here
  reducers: {
    setSelectedCountry: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedCountry } = countrySlice.actions;

export default countrySlice.reducer;
