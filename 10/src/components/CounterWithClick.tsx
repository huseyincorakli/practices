import React from 'react'
import Counter from '../hoc/Counter'

const CounterWithClick = (props:any) => {
  return (
    <div>
      <button onClick={props.increment}>Count with Click</button>
      <br />
      <br />
      <p >{props.count}</p>
      <br />
      <button onClick={props.exampleProp}>Count with Click</button>
    </div>
  )
}

export default Counter(CounterWithClick)
