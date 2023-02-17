import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import LogIn from "../log/LogIn";
import SignUp from "../log/SignUp";
import Main from "../lyout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main />,
        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <LogIn />
            },
        ]
    }
])