import HomeLayout from "../layout/HomeLayout";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Profile from "../pages/Profile";



const routes = [
    {
      path: '/',
      component: <HomeLayout />,
      children: [
        { path: '', element: <Home/>, auth: false },
        { path: 'blog', element: <Blog />, auth: false },
        { path: 'profile', element: <Profile />, auth: true },
      ],
    },
  ];
  
  export default routes;
  