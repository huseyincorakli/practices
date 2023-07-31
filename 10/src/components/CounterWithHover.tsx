import React from 'react'
import Counter from '../hoc/Counter'

const CounterWithHover = (props: any) => {
  return (
    <div>
      <button onMouseOver={props.increment}>Count with OnMouseOver</button>
      <br />
      <br />
      <p >{props.count}</p>
      <br />
      <button onMouseOver={props.exampleProp}>What is Count * Count?</button>
    </div>
  )
}

export default Counter(CounterWithHover)
