import React,{useContext} from "react";

import { Globalcontext } from "../context/GlobalState";

function Balance() {
  const {transcation} = useContext(Globalcontext);

  const amount =  transcation.map(transcation => transcation.amount);
  const total =  amount.reduce((acc, item) => (acc +=  item, 0).toFixed(2))
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}

export default Balance;
