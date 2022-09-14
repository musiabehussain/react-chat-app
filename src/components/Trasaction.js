import React, {useContext} from 'react'
import { Globalcontext } from "../context/GlobalState";



function Trasaction({transcation}) {

    const {deleteTranscation} = useContext(Globalcontext)

    const sing = Trasaction.amount  < 0  ? '-' :'+'
  return (
    <div>
       <li className={transcation.amount <0 ? "minus" :"plus"}>
          {transcation.text} <span>{sing}$ {Math.abs(transcation.amount)}</span>
          <button  onClick={()=> deleteTranscation(transcation.id)} className="delete-btn">x</button>
        </li> 
    </div>
  )
}

export default Trasaction
