import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 15,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    morefive: state => {
      state.value = state.value + 5;
    },
    incrementAumount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, morefive, incrementAumount} =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
