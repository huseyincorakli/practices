import { useParams } from "react-router-dom"

const Post = () => {
  const {url,id} = useParams()
  return (
    <div> 
      <p>Post Page</p>
      <p>Url:{url}</p>
      <p>Id:{id}</p>
    </div>
  )
}

export default Post