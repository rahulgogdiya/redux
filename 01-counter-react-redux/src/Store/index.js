import { createStore } from "redux";

const INITAL_VALUE = {
  counter: 0,
  privecy: false,
};

// const counterReducer = (store = INITAL_VALUE, action) => {
//   if (action.type === "INCRIMENT") {
//     return { counter: store.counter + 1, privecy: store.privecy };
//   } else if (action.type === "DECRIMENT") {
//     return { counter: store.counter - 1, privecy: store.privecy };
//   } else if (action.type === "ADD") {
//     return {
//       counter: store.counter + Number(action.paylode.num),
//       privecy: store.privecy,
//     };
//   } else if (action.type === "SUB") {
//     return {
//       counter: store.counter - Number(action.paylode.num),
//       privecy: store.privecy,
//     };
//   } else if (action.type === "PRIVECY") {
//     return { counter: store.counter, privecy: !store.privecy };
//   }
//   return store;
// };

const counterReducer = (store = INITAL_VALUE, action) => {
  if (action.type === "INCRIMENT") {
    return { ...store,counter: store.counter + 1};
  } else if (action.type === "DECRIMENT") {
    return {...store, counter: store.counter - 1};
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.paylode.num)
    };
  } else if (action.type === "SUB") {
    return {
      ...store,
      counter: store.counter - Number(action.paylode.num)
    };
  } else if (action.type === "PRIVECY") {
    return { ...store, privecy: !store.privecy };
  }
  return store;
};
const counterStore = createStore(counterReducer);

export default counterStore;
