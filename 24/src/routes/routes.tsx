import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const routes = [
    {path:'/', exact:true,component:<Home/>,auth:false},
    {path:'/profile', exact:true,component:<Profile/>,auth:true},
    {path:'/login', exact:true,component:<Login/>,auth:false}
]
export default routes;