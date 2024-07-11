import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Counter from "../components/Counter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/counter',
        element: <Counter/>
    }
])
