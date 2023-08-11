import { useDispatch } from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount } from "../stores/Counter"


const CounterAction = () => {

    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(increment())}}>Artır</button>
        <button  onClick={()=>{dispatch(decrement())}}>Azalt</button>
        <button  onClick={()=>{dispatch(incrementByAmount(8))}}>8 Artır</button>
        <button  onClick={()=>{dispatch(decrementByAmount(8))}}>8 Azalt</button>
    </div>
  )
}

export default CounterAction