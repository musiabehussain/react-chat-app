import React, {useContext} from "react";
import { Globalcontext } from "../context/GlobalState";
 
function IncomExpansis() {
  const {transcation} = useContext(Globalcontext);

  const amount =  transcation.map(transcation => transcation.amount);

   const  incom  = amount
   .filter(item => item > 0)
   .reduce((acc, item) => (acc +=  item),0)
   .toFixed(2);

   const expense =  (
    amount.filter(item => item < 0).reduce((acc, item) => (acc +=  item),0) * 
    -1
   ).toFixed(2);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {incom}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">
            {expense}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncomExpansis;
