import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import HeaderComponent from './component/HeaderComponent'
import BodyComponent from './component/Bodycomponent';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Error from './component/Error'
import RestaurentMenu from "./component/RestaurentMenu";
import Profile from "./component/Profile";
import ProfileComponenet from "./component/ProfileComponenet";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet/>
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
     
        {
          path:"/",
          element:<BodyComponent/>,
          
        },
    
      {
        path:"/about/",
        element:<About/>,
        errorElement:<Error/>,
        children:[
          {
            path:"profile",
            element:<ProfileComponenet/> //<Profile/>
          }
        ]
        
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurentMenu/>,
        
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
