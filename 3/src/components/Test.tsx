import { useState,useEffect } from 'react'

const Test = () => {
  const [data, setData] = useState<object>(null)
  let [id,setId]= useState<number>(1);

  useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setData(data);
    })
    return ()=>{
        
    }
  },[id])
 
  const Next=()=>{
    if (id>=10) {
        setId(10)
      }
      else{
        setId(id+=1)
      }
  }
  const Previous=()=>{
    if (id<=1) {
        setId(1)
      }
      else{
        setId(id-=1)
      }
  }

  return (
  <div>
    <button onClick={()=>Next()}>Next</button> <span>   </span>
    <button onClick={()=>Previous()}>Previous</button> <br />
    <hr />
    {data ? JSON.stringify(data) : 'Loading...'}
  </div>);

}

export default Test
