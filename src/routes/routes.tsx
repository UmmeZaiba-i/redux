import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Counter from "../components/Counter";
import NavBar from "../components/NavBar";
import MyTable from "../components/MyTable";
import Todo from "../components/Todo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/counter',
                element: <Counter />
            },
            {
                path: '/table',
                element:<MyTable/>
            },
            {
                path: '/todo',
                element: <Todo/>
            },
        ]
    },

])
