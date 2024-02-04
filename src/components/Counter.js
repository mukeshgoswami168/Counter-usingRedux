import { useDispatch, useSelector } from "react-redux"
import {increment , decrement,reset} from "../redux/slices/CounterSlice"

function Counter(){

    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    return (

        
        <div className="flex flex-col items-center justify-center mx-auto mt-[200px]">
              <button onClick={()=>dispatch(increment())} className="rounded-md border-4 font-semibold">
               Increment
              </button>
              <br></br>
              <br>
              </br>
              <div>{count}</div>
              <br>
              </br>
              <br></br>
              <button onClick={()=>dispatch(decrement())} className="rounded-md border-4 font-semibold">
               Decrement
              </button>
              <br>
              </br>
              <br></br>
              <button onClick={()=>dispatch(reset())} className="rounded-md border-4 font-semibold">Reset</button>

        </div>
    )
}

export default Counter