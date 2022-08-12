import  { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import Trasaction from "./Trasaction";
export default function  TransactionList (){
  const {transcation} = useContext(Globalcontext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
      {
        transcation.map(transcation =>((
         <Trasaction  key={transcation.id} transcation={transcation}/>
        )))
      
      }
        
      </ul>
    </>
  );
}


