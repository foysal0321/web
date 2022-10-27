import {createBrowserRouter } from "react-router-dom";
import Main from '../lyout/Main.js'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Course from '../Components/Courses/Course'
import CourseDetails from '../Components/Courses/CourseDetails'
import Blog from '../Components/blog/Blog'
import FAQ from '../Components/FAQ/FAQ'
import Checkout from '../Components/checkout/Checkout'
import PrivetRout from "./PrivetRout.js";
import Profile from '../Components/profile/Profile'

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<h5>Page not found 404!</h5>,
        children:[
            {
                path:'/',
                element:<Home />
               
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/courses',
                element:<Course />
            },
            {
                path:'/courses/:id',
                element:<CourseDetails />,
                loader:({params}) => fetch(`https://web-server-five.vercel.app/web/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivetRout><Checkout /> </PrivetRout> ,
                loader:({params}) => fetch(`https://web-server-five.vercel.app/checkout/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/faq',
                element:<FAQ />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/profile',
                element:<Profile />
            },
            
        ]
    }
])

 
  