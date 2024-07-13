import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {

    incriment: (state) => {
      state.counterVal++;
    },

    decriment: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },

    sub: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
  
});

//----------------------------------------------------------------

const privecyslice = createSlice({
  name: "privecy",
  initialState: false,
  reducers: {
    toggle: (state) => {
     return state = !state;
    },
  },
});
export const privecyAction = privecyslice.actions;

//--------------------------------------------------------------------

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privecy: privecyslice.actions,
  },
});

export const counterAction = counterSlice.actions;

export default counterStore;
