import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Contols() {
  const dipatch = useDispatch();
  const inputElement = useRef();

  const HandleIncriment = () => {
    dipatch({ type: "INCRIMENT" });
  };
  const HandleDecrement = () => {
    dipatch({ type: "DECRIMENT" });
  };
  const Handleadd = () => {
    dipatch({
      type: "ADD",
      paylode: {
        num: inputElement.current.value,
      },
    });
  };
  const Handlesub = () => {
    dipatch({
      type: "SUB",
      paylode: {
        num: inputElement.current.value,
      },
    });
  };
  const privecy = () => {
    dipatch({
      type: "PRIVECY",
    
    });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={HandleIncriment}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-success btn-lg px-4"
        onClick={HandleDecrement}
      >
        -1
      </button>

      <input
        type="number"
        style={{ width: "100%" }}
        placeholder="Enter number"
        ref={inputElement}
      />
      <button
        type="button"
        className="btn btn-danger btn-lg px-4 gap-3"
        onClick={Handlesub}
      >
        subtrect
      </button>

      <button
        type="button"
        className="btn btn-info btn-lg px-4"
        onClick={Handleadd}
      >
        add
      </button>
      <button className="btn btn-warning" onClick={privecy}>
        Privecy
      </button>
    </div>
  );
}

export default Contols;
