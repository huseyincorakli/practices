import  {useSelector} from 'react-redux'
import { RootState } from '../Store'

const Counter = () => {
    const count = useSelector((state:RootState)=>state.counter.value) 


    return (
    <div>{count}</div>
  )
}

export default Counter