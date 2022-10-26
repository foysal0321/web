import {createBrowserRouter } from "react-router-dom";
import Main from '../lyout/Main.js'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Course from '../Components/Courses/Course'
import CourseDetails from '../Components/Courses/CourseDetails'
import Blog from '../Components/blog/Blog'
import FAQ from '../Components/FAQ/FAQ'

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
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
                path:'/courseDetails',
                element:<CourseDetails />
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
            
        ]
    }
])

 
  