import React, {lazy, Suspense, useState}from "react";
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
import Shimmer from "./component/Shimmer";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./component/Cart";

const Instamart=lazy(()=>import("./component/Instamart"))

const App = () => {
  const [user, setUser]=useState({
    name:'kanchan',
    email:"kn@gmail.com"
  })
  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user:user,
      setUser:setUser,
    }}>
      <HeaderComponent />
      <Outlet/>
    </UserContext.Provider>
    </Provider>
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
          element:<BodyComponent />,
          
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
        
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
        
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
