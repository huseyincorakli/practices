import { NavLink, Outlet } from 'react-router-dom'

const BlogLayout = () => {
  return (
    <div>
      <NavLink  to={'categories'}>Categories</NavLink>
       <NavLink  to={'post/4822/useParams-kullanarak-url-al'}>Posts</NavLink> 
      <Outlet/>
    </div>
  )
}

export default BlogLayout