import React, { useState } from "react";
import { BuyCake, BuyIceCream } from "./action/Actions";
// import store from "./Create{store}Store";
import { useSelector } from "react-redux";

const App = () => {
  const numerofcake = useSelector((state) => {
    console.log(state);
    return state.CakeReducer.number_of_cake;
  });
  const numberOfIcecream = useSelector(
    (state) => state.IcecreamReducer.numberOfIcecream
  );

  const [cake, setCake] = useState(1);
  const [err, setErr] = useState("");

  const errhandler = () => {
    setErr(`enter the value less then ${numerofcake}`);
    setTimeout(() => {
      setErr("");
    }, 3000);
  };

  return (
    <div className="app">
      {err && <div>{err}</div>}
      <div>Number of cake- {numerofcake}</div>
      <input onChange={(e) => setCake(e.target.value)} value={cake} />
      <button
        onClick={() => {
          cake <= numerofcake && numerofcake > 0 ? BuyCake(cake) : errhandler();
        }}
      >
        Buy {cake} Cake
      </button>
      <div>Number of IceCream- {numberOfIcecream}</div>
      <button onClick={() => BuyIceCream()}>Buy Cake</button>
    </div>
  );
};

export default App;
