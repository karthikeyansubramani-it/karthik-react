import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";


//chumcking
//code splittimg
//Dynamic loading or Dynamic import
//lazy loading
//Dynamic bundle
//Faster Initial Load
//Better User experience
//Reducing Browser caching overhead
//Optimizing mobile performance

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{
    return  <div className="app">
            <Header/>
            <Outlet />
        </div>
    
} 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element:  <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer></Shimmer>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
   
]);
console.log(AppLayout())   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
