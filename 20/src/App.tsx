import './App.css'
import {Route,Routes,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Categories from './pages/Blog/Categories.tsx'
import Post from './pages/Blog/Post.tsx'
import BlogLayout from './pages/Blog/BlogLayout.tsx'
import Blog from './pages/Blog/index.tsx'
import Page404 from './pages/Page404.tsx'
import Blog404 from './pages/Blog/Blog404.tsx'

function App() {
 

  return (
    
    <div>
      <nav>
        {/* activeLink diye class atar yoksa default olarak active classı atar */}
      <NavLink className={({isActive})=>isActive&& 'activeLink'}
               to={'/'}>Home</NavLink>
      <NavLink to={'/blog'}>Blog</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      </nav>
      <Routes>
      <Route path='/' element ={<Home/>}/> 
      <Route path='/blog' element ={<BlogLayout/>}>
          <Route index={true} element={<Blog/>} />
          <Route path={'categories'} element={<Categories/>} />
          <Route path={'post/:id/:url'} element={<Post/>} />
          <Route path='*' element={<Blog404/>}/>
      </Route>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </div>
  )
}

export default App
