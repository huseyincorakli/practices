import { ReactElement } from "react";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Blog from "./pages/Blog";
import Blog404 from "./pages/Blog/Blog404";
import BlogLayout from "./pages/Blog/BlogLayout";
import Categories from "./pages/Blog/Categories";
import Post from "./pages/Blog/Post";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomeLayout from "./pages/Home/HomeLayout";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";

interface Route {
  path: string;
  element: ReactElement;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <BlogLayout></BlogLayout>,
        children: [
          {
            index: true,
            element: <Blog></Blog>,
          },
          {
            path: "categories",
            element: <Categories></Categories>,
          },
          {
            path: "post/:id/:url",
            element: <Post></Post>,
          },
          {
            path: "*",
            element: <Blog404></Blog404>,
          },
        ],
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
        ],
      },
    ],
  },
];

export default routes;

//#region  auth ? 

// her bir pathe auth:true gibi bir değişken ekleyip  ==> export default authMap(routes) 
// ile sarmalarsak her bile path için tekrar tekrar PrivateRoute içerisine almamıza gerek kalmaz
// kullanışlı olabilir :))

   // ========> {path: "contact",element: <Contact></Contact>,auth:true}

// const  authMap =routes => routes.map(route=>{
//   if(route?.auth){
//     route.element=<PrivateRoute>{route.element}</PrivateRoute>
//   }
//   if(route?.children){
//     route.children=authMap(route.children)
//   }
//   return route;
// })
//#endregion