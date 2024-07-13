import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const counter = useSelector(store => store.counter);

  return <p className="lead mb-4">current value : {counter}</p>;
}

export default Display;
