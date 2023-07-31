import { useState } from 'react'
const Counter = (Component: React.FunctionComponent) => {
  const CounterWrapper = (props: any) => {
    const [count, setCount] = useState<number>(0)

    const exampleProp = () => {
      alert(`count*count=  ${count * count}`)
    }
    const Increment = () => {
      setCount(number => number + 1)
    }
    return (
      <Component
        exampleProp={exampleProp}
        count={count}
        increment={Increment}
        {...props}
      />
    )
  }

  return CounterWrapper
}

export default Counter
