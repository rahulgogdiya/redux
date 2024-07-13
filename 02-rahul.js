const redux = require("redux");
const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCRIMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECEREMENT") {
    newStore = { counter: store.counter - 1 };
  }else if(action.type === "ADICTION"){
    newStore = { counter: store.counter + action.payload.number};

  }
  return newStore;
};
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);

store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "DECEREMENT" });
store.dispatch({ type: "ADICTION", payload: { number: 7 } });
store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "INCRIMENT" });
